
const MOCK_APIS = {
    sliderData: 'https://run.mocky.io/v3/1492736c-c870-4027-8f7e-71879825f485',
    quickLinks: 'https://run.mocky.io/v3/784a8b92-5c85-43a2-8f45-33626a8acd5b',
    elektronikFirsatlar: 'https://run.mocky.io/v3/6b9afac0-4837-488a-ac82-4c7fd8b653ad',
    recommendations: 'https://run.mocky.io/v3/182c7323-c91d-448a-968a-239ab2703c93'
};


async function fetchData(url) {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

//  Main Slider
async function initMainSlider() {
    const sliderData = await fetchData(MOCK_APIS.sliderData) || [
        { image: 'https://upload.wikimedia.org/wikipedia/tr/c/c0/The_Pianist_Poster.jpg',heading: 'THE PİANİST' },
        { image: 'https://iasbh.tmgrup.com.tr/012de3/0/0/0/0/0/0?u=https://isbh.tmgrup.com.tr/sb/album/2024/01/28/garipin-fatosu-36-yilda-oyle-bir-degisti-ki-o-tatli-kiz-sen-misin-adeta-sirra-kadem-basti-iste-ece-altonun-son-1706411835681.jpg&mw=600', heading: 'AYLA' },
        { image: 'https://cdnuploads.aa.com.tr/uploads/Contents/2022/08/25/thumbs_b_c_e02375d936a5d9ab6499dfbc83efce50.jpg?v=095620', heading: ' AVATAR' },
        { image: 'https://image.milimaj.com/i/milliyet/75/869x477/5f57890dadcdeb1ad018b6a3.jpg', heading: 'YEŞİL YOL' },
        { image: 'https://www.postifull.com.tr/cdn/shop/products/100740a1.jpg?v=1680959095', heading: 'THE PRINCESS' },
        { image: 'https://www.perasinema.com/wp-content/uploads/2022/09/1blackswan.jpg', heading: '' },
        { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRss6NtvgA8Dv_5DNLG0xsuiJ6sqg_tjfwHzg&s', heading: '' },
        { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP7r-Njo599ouXFTvDKNMdIbU7ItwpsB_rAQ&s', heading: '' },
        { image: 'https://static.nadirkitap.com/fotograf/221106/15/Efemera_201910201524281.jpg', heading: '' },
         { image: 'https://d35fbhjemrkr2a.cloudfront.net/Images/Shop/31/Product/6925/Thumb/197.jpg', heading: '' },
        
        
    ];

    const sliderContainer = document.querySelector('#mainSlider .carousel-inner');
    sliderData.forEach((item, index) => {
        const slide = document.createElement('div');
        slide.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        slide.innerHTML = `
            <img src="${item.image}" class="d-block w-100" alt="${item.heading}">
            <div class="carousel-caption">
                <h3>${item.heading}</h3>
            </div>
        `;
        sliderContainer.appendChild(slide);
    });
}

// Links
async function initQuickLinks() {
    const quickLinksData = await fetchData(MOCK_APIS.quickLinks) || [
        { title: 'Dune: Part Two', link: '#' },
        { title: 'Godzilla x Kong: The New Empire', link: 'https://www.wherecaniwatchthis.tv/?country=TR&movie=693134&utm_source=chatgpt.com' },
        { title: 'Oppenheimer', link: '#' },
        { title: 'Barbie', link: '#' },
        { title: 'The Gentlemen (Netflix)', link: '#' },
        { title: 'Road House', link: '#' },
        { title: 'Shōgun (FX)', link: '#' },
        { title: '3 Body Problem (Netflix)', link: '#' },

    ];

    const container = document.getElementById('quickLinks');
    quickLinksData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'col-md-3 col-sm-6';
        card.innerHTML = `
            <div class="quick-link-card">
                <h5>${item.title}</h5>
                <a href="${item.link}" class="text-white">Learn More →</a>
            </div>
        `;
        container.appendChild(card);
    });
}


async function initElektronikFirsatlar() {
    const elektronikData = await fetchData(MOCK_APIS.elektronikFirsatlar) || [
        { image: 'https://resizing.flixster.com/tdMXmsVnR-vIj4Q5IACpEZ7O1ak=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15987_v_h8_au.jpg', name: 'The Shawshank Redemption (1994)', puan: ' 9.3/10' },
        { image: 'https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_.jpg', name: 'The Godfather (1972) ', puan: ' 9.2/10' },
        { image: 'https://play-lh.googleusercontent.com/auIs5tjWlLYaFPGClZOJ7m5YVbnX6uBvz0X02r8TkwFKdzE53ww2MqWSS9gU0YNqoYwvpg', name: 'The Dark Knight ', puan: '2.998,45 TL' },
        
    ];

    const container = document.querySelector('#elektronikSlider .carousel-inner');
    elektronikData.forEach((item, index) => {
        const slide = document.createElement('div');
        slide.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        slide.innerHTML = `
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="product-card text-center">
                        <img src="${item.image}" alt="${item.name}">
                        <h4 class="mt-3">${item.name}</h4>
                        <h5 class="text-primary">${item.price}</h5>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(slide);
    });
}

//  Recommendations
async function initRecommendations() {
    const recommendationsData = await fetchData(MOCK_APIS.recommendations) || [
        { image: 'https://cdn1.ntv.com.tr/gorsel/JRZBH1x8zUyl1Uh8u2A6ZQ.jpg?width=1000&mode=both&scale=both&v=1570250922315', name: 'Maleficent ', price: '2014', rating: 4 },
        { image: 'https://i.ytimg.com/vi/mdsZWgomsOI/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDhJLRLKb3WGq38YB1DrlYtQ0Kn4g', name: 'The Gentlemen', price: '2019', rating: 4},
        { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnzlHiCAg6duzg7OpefaW6kU2B6EO8WTDb7A&s', name: 'The Meg', price: '2018', rating: 5 },
        { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSjaQlcsAFavT6FbR6Kc9bmHSnPGjUq0X3UA&s', name: 'X‑Men', price: '2000', rating: 4 },
        { image: 'https://img.memurlar.net/galeri/16013/69504c12-be26-e911-80e7-a0369f7d1486.jpg?width=800', name: 'Escape Room', price: '2018', rating: 5 },
        { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTygp5oagIxcLM556bVYSb9UcBd9EpYOOoCLA&s', name: ' 3391 Kilometres ', price: '2024', rating: 4 },
        { image: 'https://ia.tmgrup.com.tr/fec36b/0/0/0/0/0/0?u=http://i.tmgrup.com.tr/es/album/2019/01/02/ocak-ayinin-en-sevilen-filmler-1546438082142.jpg&mw=750', name: 'Bird Box', price: '2018', rating: 5 },
        { image: 'https://www.limonproduction.com/uploads/hizmetler/4749dpoyraz-karayel-kuresel-sermaye.jpg', name: 'Poyraz Karayel: Küresel Sermaye', price: '2017', rating: 4 },
    ];

    const container = document.getElementById('recommendations');
    recommendationsData.forEach(item => {
        const stars = '★'.repeat(item.rating) + '☆'.repeat(5 - item.rating);
        const card = document.createElement('div');
        card.className = 'col-md-3 col-sm-6';
        card.innerHTML = `
            <div class="product-card">
                <img src="${item.image}" alt="${item.name}">
                <h5 class="mt-3">${item.name}</h5>
                <p class="text-primary">${item.price}</p>
                <div class="stars">${stars}</div>
            </div>
        `;
        container.appendChild(card);
    });
}


document.addEventListener('DOMContentLoaded', () => {
    initMainSlider();
    initQuickLinks();
    initElektronikFirsatlar();
    initRecommendations();
}); 