addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
    // https://community.cloudflare.com/t/ip-address-of-the-remote-origin-of-the-request/13080
    var ip = request.headers.get('cf-connecting-ip')

    return new Response(ip, {
	headers: { 'content-type': 'text/plain' },
    })
}
