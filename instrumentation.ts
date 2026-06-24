export async function onRequestError(
    error: Error,
    request: Request,
    context: { routePath: string }
) {
    // Will later connect to Sentry
    console.error(`[${context.routePath}] ${error.message}`)
}

export async function register() {
    if (process.env.NEXT_RUNTIME === 'nodejs') {
        // Future: import Sentry node SDK here
    }
}
