export default  {
  title: 'divina voluntad',
  description: 'Dar a conocer las verdades de la divina voluntad',
  keywords: ['divina voluntad', 'libro de cielo', 'tercer fiat', 'Luisa Piccarreta', "tercer fiat","horas de la pasión","Joseph iannuzzi"],
  url: 'divina-voluntad.org', // your site url without trailing slash
  paginate: 18,
  // uncomment the next line if you want to add disqus to your site
  // disqusShortname: "your-shortname"
  currentYear() {
    const today = new Date();
    return today.getFullYear();
  }
};
