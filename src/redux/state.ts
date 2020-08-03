type PostsType = {
    id: number,
    title: string,
    text: string,
    likesCount: number
}

type DialogType = {
    id: number,
    name: string
}

type MessageType = {
    id: number,
    message: string
}

type ProfilePageType = {
    posts: Array<PostsType>
}

type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

type RootStateType = {
    profilePage: ProfilePageType,
    dialogPage: DialogPageType
}

let state: RootStateType = {
    profilePage: {
        posts: [
            {
                id: 1,
                title: "PostItem #1",
                text: "Hello!",
                likesCount: 2
            },
            {
                id: 2,
                title: "PostItem #2",
                text: "Goodbye!",
                likesCount: 5
            }
        ]
    },
    dialogPage: {
        dialogs: [
            {
                id: 1,
                name: "Kira",
            },
            {
                id: 2,
                name: "Sveta"
            },
            {
                id: 3,
                name: "Artes"
            },
            {
                id: 4,
                name: "Foma"
            },
            {
                id: 5,
                name: "Roma"
            }
        ],
        messages: [
            {
                id: 1,
                message: "Hello #1"
            },
            {
                id: 2,
                message: "Hello #2"
            },
            {
                id: 3,
                message: "Hello #3"
            }
        ]
    }
}

export default state;