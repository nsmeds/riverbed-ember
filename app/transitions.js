export default function(){
    this.transition(
      this.fromRoute('main'),
      this.use('fade'),
      this.reverse('fade')
  );
    this.transition(
      this.fromRoute('menu.submit'),
      this.use('crossFade'),
      this.reverse('crossFade')
  );  
    this.transition(
      this.fromRoute('menu.subscribe'),
      this.use('crossFade'),
      this.reverse('crossFade')
  );  
    this.transition(
      this.fromRoute('menu.about'),
      this.use('crossFade'),
      this.reverse('crossFade')
  );  
    this.transition(
      this.fromRoute('menu.contact'),
      this.use('crossFade'),
      this.reverse('crossFade')
  );  
    this.transition(
      this.fromRoute('menu.back-issues'),
      this.use('crossFade'),
      this.reverse('crossFade')
  );  
};