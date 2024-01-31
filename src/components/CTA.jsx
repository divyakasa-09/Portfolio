import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
       If you have any Opportunity <br className='sm:block hidden' />
       Please contact me !
      </p>
      <Link to='/contact' className='btn'>
        Contact
      </Link>
    </section>
  );
};

export default CTA;
