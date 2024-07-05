import { ServerSidebar } from "@/components/server/server-sidebar";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirectToSignIn } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const ServerIdLayout = async ({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { serverId: string };
}) => {

    const profile = await currentProfile();

    if (!profile) {
        return redirectToSignIn();
    }

    const server = await db.server.findUnique({
        where: {
            id: params.serverId,  // because we named it [serverId] if it's something else then we will write params.somethingElse
            members: {            // only members will load or access the channel 
                some: {
                    profileId: profile.id
                }
            }
        }
    });

    if (!server) {
        return redirect("/");
    }


    return (
        <div className="h-full">
            <div className="max-md:hidden md:flex fixed h-full w-60 z-20 flex-col inset-y-0">
                <ServerSidebar serverId={params.serverId} />
            </div>
            <main className="h-full md:pl-60">
                {children}
            </main>
        </div>
    )
};

export default ServerIdLayout;