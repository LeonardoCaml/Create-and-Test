import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite';

//Keys from interaction
export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.focusthread.socialhome',
    projectId: '666e14f40013de7d844b',
    databaseId: '666e17fc0012e6454626',
    userCollectionId: '666e188c0032352adf11',
    postCollectionId: '666e18de000588ce1a3e',
    storadeId: '666e1d14001c0b50dc9d'
}

const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export async function createUser(email, password, username) {
    try {
      const newAccount = await account.create(
        ID.unique(),
        email,
        password,
        username
      );if (!newAccount) throw Error;

      const avatarUrl = avatars.getInitials(username);
  
      await signIn(email, password);
  
      const newUser = await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.userCollectionId,
        ID.unique(),
        {
          accountId: newAccount.$id,
          email: email,
          username: username,
          avatar: avatarUrl,
        }
      );

        return newUser;
    } catch (error) {
        throw new Error(error);
    }
}

//login function
export async function signIn(email, password) {
    try {
      const session = await account.createEmailPasswordSession(email, password);
  
      return session;
    } catch (error) {
      throw new Error(error);
    }
  }

//Get Current USer
export async function getCurrentUser() {
    try {
      const currentAccount = await getAccount();
      if (!currentAccount) throw Error;
  
      const currentUser = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.userCollectionId,
        [Query.equal("accountId", currentAccount.$id)]
      );
  
      if (!currentUser) throw Error;
  
      return currentUser.documents[0];
    } catch (error) {
      console.log(error);
      return null;
    }
  }