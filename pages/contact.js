
function Contact({ data: { contact }}) {
  const phoneDisplay = contact?.phone.display ?? '';
  const phoneNumber = contact?.phone.number ?? 0;
  const email = contact?.email ?? '';
  return <>
    <h2>Contact Us</h2>

    <p>Phone: <a href={`tel:+1${phoneNumber}`}>{phoneDisplay}</a></p>
    <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
  </>
}

export default Contact;