import Game from "@/types/Game";

export async function getGames() {
    const response = await fetch('http://localhost:3000/api/games', {
        next: { revalidate: 3 }
    })
    const data = await response.json();
    return data.games;
}

export async function getPost(postId: string) {
    const response = await fetch(`http://localhost:3000/api/posts/${postId}`, {
        next: { revalidate: 3 }
    })
    const data = await response.json();
    return data;
}

// export async function savePost(post: Post) {
//     try {
//         const response = await fetch('http://localhost:3000/api/posts', {
//             method: 'POST',
//             headers: {
//                 'Context-Type': 'application/json',
//             },
//             body: JSON.stringify(post),
//         })

//         if (!response.ok) {
//             alert('Network response was not ok');
//         }

//         return response.json();
//     } catch (e) {
//         console.error(e);
//         alert('Error!');
//     }
// }