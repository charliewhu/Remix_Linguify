import { setupServer } from 'msw/node'
import { handlers } from './handlers'

// Setup requests interception using the given handlers.
export const server = setupServer(...handlers)

server.listen({ onUnhandledRequest: "bypass" });
console.info("🔶 Mock server running");