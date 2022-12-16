/** Deze functie verwijdert de JWToken uit de sessionstorage client side,
 * deze loopt af na 30 minuten.
 * En brengt de gebruiker terug naar de log-in pagina.
 * Hierdoor is er ook gelijk geen toegang meer tot de site.
 */
// eslint-disable-next-line no-unused-vars
function logOut() {
  sessionStorage.removeItem('JWT');
  window.open('/login', '_self');
}