import { auth, currentUser, redirectToSignIn } from "@clerk/nextjs/server";
import { db } from "./db";

export const initialProfile = async () => {
    const user = await currentUser();

    if (!user) {
        return redirectToSignIn();
    }

    // Check if a profile already exists for the current user
    const existingProfile = await db.profile.findUnique({
        where: {
            userId: user.id,
        }
    });

    if (existingProfile) {
        return existingProfile;
    }

    // Create a new profile if it doesn't exist
    const newProfile = await db.profile.create({
        data: {
            userId: user.id,
            name: `${user.firstName} ${user.lastName}`,
            imageUrl: user.imageUrl,
            email: user.emailAddresses[0].emailAddress,
        }
    });

    return newProfile;
}