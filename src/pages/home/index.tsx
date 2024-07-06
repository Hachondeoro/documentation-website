import React from 'react';
import Layout from '../../components/layout.tsx';
import ContentUnit from '../../components/content-unit.tsx';
import Youtube from '../../components/youtube.tsx';
import Lang from "../../components/lang.tsx";

const Index = () => <Layout
  page='home'
>
  <ContentUnit text={'home.title'} level={'h1'}>
    home.what
    home.why
  </ContentUnit>
  <ContentUnit text={'home.benchmark.title'} level={'h2'}>
    home.benchmark.microservices
    home.benchmark.purpose
  </ContentUnit>
  <ContentUnit text={'home.load-test.title'} level={'h2'}>
    home.load-test.microservices
    home.load-test.purpose
  </ContentUnit>
  <ContentUnit text={'home.content-test.title'} level={'h2'}>
    home.content-test.microservices
    home.content-test.purpose
  </ContentUnit>
  <Youtube lnkey={'home.demo.youtube'} level={'h2'}>gdm7kI0aSmo</Youtube>
  <ContentUnit text={'home.libraries.title'} level={'h2'}>
    home.libraries.description
    home.libraries.reusability
    home.libraries.threading
  </ContentUnit>
  <div className="card">
    <h2>
      <Lang lnkey='home.calendar'/>
    </h2>
    <iframe
      style={{borderWidth: 0}}
      height="500px"
      width="100%"
      src="https://calendar.online/3c3632e38202b4bf4ec5?iframe=true">
    </iframe>
  </div>
</Layout>;
export default Index;
