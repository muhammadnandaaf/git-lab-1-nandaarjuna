export function login(username, password) {
    console.log('User logged in:', username);
    return { success: true, user: username };
}
