export function register(username, password, email) {
    console.log('User registered:', username);
    return { success: true, userId: Date.now() };
}
