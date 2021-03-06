import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getLinksSave(key) {
    const myLinks = await AsyncStorage.getItem(key);

    let linkSaves = JSON.parse(myLinks) || [];

    return linkSaves;
};

export async function saveLink(key, newLink) {
    let linkStored = await getLinksSave(key);

    const hasLink = linkStored.some( link => link.id === newLink.id);

    if(hasLink){
        return;
    };

    linkStored.push(newLink);
    await AsyncStorage.setItem(key, JSON.stringify(linkStored));
};

export async function deleteLink(links, id) {
    let myLink = links.filter( (item) => {
        return (item.id !== id)
    })
    await AsyncStorage.setItem('links', JSON.stringify(myLink));

    return myLink;
};