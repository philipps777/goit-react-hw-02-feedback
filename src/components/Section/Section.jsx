import { H } from './Section.styled';
export const Section = ({ title, children }) => (
  <section>
    <H>{title}</H>
    {children}
  </section>
);
