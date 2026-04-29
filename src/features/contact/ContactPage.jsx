import Input from '../../components/Input.jsx'
import Button from '../../components/Button.jsx'

function ContactPage() {
  return (
    <section className="page-shell">
      <p className="eyebrow">Contact Feature</p>
      <h1>Contact</h1>
      <form className="contact-form">
        <Input type="text" placeholder="Your name" />
        <Input type="email" placeholder="Email address" />
        <Button type="submit">Send message</Button>
      </form>
    </section>
  )
}

export default ContactPage
