
exports.seed = function(knex) {
  // Truncate current table
  return knex('products').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        // Nike
        {
          product_name: 'Nike Mercurial Vapor 13 Academy',
          product_description: 'A Mercurial 360 é uma das chuteiras Nike mais adoradas de todos os tempos. Centenas de jogadores e jogadoras profissionais usam este modelo em todo o mundo. Projetada para voar baixo, o material leve e o caimento firme trazer a tração que você precisa para deixar o outro time comendo poeira. Complementando a inovação da placa no antepé na 12, a Nike Mercurial Vapor 13 Academy confere uma placa versátil para múltiplas superfícies que proporciona tração em gramados naturais e artificiais.',
          product_image: 'nike-mercurial-vapor-13.png',
          product_price: '189,90',
          product_brand: 'Nike',
          product_main_color: '#237bce'
        },
        {
          product_name: 'Nike Mercurial Superfly 7',
          product_description: 'A Mercurial 360 é uma das chuteiras Nike mais adoradas de todos os tempos. Centenas de jogadores e jogadoras profissionais usam este modelo em todo o mundo. Projetada para voar baixo, o material leve e o caimento firme trazer a tração que você precisa para deixar o outro time comendo poeira. Complementando a inovação da placa no antepé na 12, a Nike Mercurial Vapor 13 Academy confere uma placa versátil para múltiplas superfícies que proporciona tração em gramados naturais e artificiais.',
          product_image: 'nike-mercurial-superfly-7.png',
          product_price: '169,90',
          product_brand: 'Nike',
          product_main_color: '#237bce'
        },
        {
          product_name: 'Nike Mercurial Vapor 13 Neymar',
          product_description: 'O cabedal macio da Nike Mercurial Vapor 13 Academy Neymar Jr. IC envolve o seu pé para um ajuste de segunda pele, enquanto o solado de borracha ajuda a turbinar a tração em quadra ou nas ruas.',
          product_image: 'nike-mercurial-vapor-13-neymar.png',
          product_price: '289,90',
          product_brand: 'Nike',
          product_main_color: 'pink'
        },
        {
          product_name: 'Nike Phanton VSN',
          product_description: 'A Mercurial 360 é uma das chuteiras Nike mais adoradas de todos os tempos. Centenas de jogadores e jogadoras profissionais usam este modelo em todo o mundo. Projetada para voar baixo, o material leve e o caimento firme trazer a tração que você precisa para deixar o outro time comendo poeira. Complementando a inovação da placa no antepé na 12, a Nike Mercurial Vapor 13 Academy confere uma placa versátil para múltiplas superfícies que proporciona tração em gramados naturais e artificiais.',
          product_image: 'nike-phanton-vsn.png',
          product_price: '239,90',
          product_brand: 'Nike',
          product_main_color: 'lightgreen'
        },
        // Adidas
        {
          product_name: 'Adidas FV Artilheira',
          product_description: 'A Mercurial 360 é uma das chuteiras Nike mais adoradas de todos os tempos. Centenas de jogadores e jogadoras profissionais usam este modelo em todo o mundo. Projetada para voar baixo, o material leve e o caimento firme trazer a tração que você precisa para deixar o outro time comendo poeira. Complementando a inovação da placa no antepé na 12, a Nike Mercurial Vapor 13 Academy confere uma placa versátil para múltiplas superfícies que proporciona tração em gramados naturais e artificiais.',
          product_image: 'adidas-fv-artilheira.png',
          product_price: '169,90',
          product_brand: 'Adidas',
          product_main_color: 'red'
        },
        {
          product_name: 'Adidas INF Artilheira',
          product_description: 'A Mercurial 360 é uma das chuteiras Nike mais adoradas de todos os tempos. Centenas de jogadores e jogadoras profissionais usam este modelo em todo o mundo. Projetada para voar baixo, o material leve e o caimento firme trazer a tração que você precisa para deixar o outro time comendo poeira. Complementando a inovação da placa no antepé na 12, a Nike Mercurial Vapor 13 Academy confere uma placa versátil para múltiplas superfícies que proporciona tração em gramados naturais e artificiais.',
          product_image: 'adidas-inf-artilheira.png',
          product_price: '199,90',
          product_brand: 'Adidas',
          product_main_color: 'lightgreen'
        },
        {
          product_name: 'Adidas Nemeziz Tango',
          product_description: 'A Mercurial 360 é uma das chuteiras Nike mais adoradas de todos os tempos. Centenas de jogadores e jogadoras profissionais usam este modelo em todo o mundo. Projetada para voar baixo, o material leve e o caimento firme trazer a tração que você precisa para deixar o outro time comendo poeira. Complementando a inovação da placa no antepé na 12, a Nike Mercurial Vapor 13 Academy confere uma placa versátil para múltiplas superfícies que proporciona tração em gramados naturais e artificiais.',
          product_image: 'adidas-nemeziz-tango.png',
          product_price: '189,90',
          product_brand: 'Adidas',
          product_main_color: 'blue'
        },
        {
          product_name: 'Adidas X',
          product_description: 'A Mercurial 360 é uma das chuteiras Nike mais adoradas de todos os tempos. Centenas de jogadores e jogadoras profissionais usam este modelo em todo o mundo. Projetada para voar baixo, o material leve e o caimento firme trazer a tração que você precisa para deixar o outro time comendo poeira. Complementando a inovação da placa no antepé na 12, a Nike Mercurial Vapor 13 Academy confere uma placa versátil para múltiplas superfícies que proporciona tração em gramados naturais e artificiais.',
          product_image: 'adidas-x.png',
          product_price: '169,90',
          product_brand: 'Adidas',
          product_main_color: 'blue'
        },
        //Umbro
        {
          product_name: 'Umbro F5 Light',
          product_description: 'A Mercurial 360 é uma das chuteiras Nike mais adoradas de todos os tempos. Centenas de jogadores e jogadoras profissionais usam este modelo em todo o mundo. Projetada para voar baixo, o material leve e o caimento firme trazer a tração que você precisa para deixar o outro time comendo poeira. Complementando a inovação da placa no antepé na 12, a Nike Mercurial Vapor 13 Academy confere uma placa versátil para múltiplas superfícies que proporciona tração em gramados naturais e artificiais.',
          product_image: 'umbro-f5-light.png',
          product_price: '229,90',
          product_brand: 'Umbro',
          product_main_color: 'lightblue'
        },
        {
          product_name: 'Umbro Soul II Pro',
          product_description: 'A Mercurial 360 é uma das chuteiras Nike mais adoradas de todos os tempos. Centenas de jogadores e jogadoras profissionais usam este modelo em todo o mundo. Projetada para voar baixo, o material leve e o caimento firme trazer a tração que você precisa para deixar o outro time comendo poeira. Complementando a inovação da placa no antepé na 12, a Nike Mercurial Vapor 13 Academy confere uma placa versátil para múltiplas superfícies que proporciona tração em gramados naturais e artificiais.',
          product_image: 'umbro-soul-ii-pro.png',
          product_price: '199,90',
          product_brand: 'Umbro',
          product_main_color: 'grey'
        },
        {
          product_name: 'Umbro F5 Light Pink',
          product_description: 'A Mercurial 360 é uma das chuteiras Nike mais adoradas de todos os tempos. Centenas de jogadores e jogadoras profissionais usam este modelo em todo o mundo. Projetada para voar baixo, o material leve e o caimento firme trazer a tração que você precisa para deixar o outro time comendo poeira. Complementando a inovação da placa no antepé na 12, a Nike Mercurial Vapor 13 Academy confere uma placa versátil para múltiplas superfícies que proporciona tração em gramados naturais e artificiais.',
          product_image: 'umbro-f5-light-pink.png',
          product_price: '249,90',
          product_brand: 'Umbro',
          product_main_color: 'lightpink'
        },
        {
          product_name: 'Umbro Speed IV',
          product_description: 'A Mercurial 360 é uma das chuteiras Nike mais adoradas de todos os tempos. Centenas de jogadores e jogadoras profissionais usam este modelo em todo o mundo. Projetada para voar baixo, o material leve e o caimento firme trazer a tração que você precisa para deixar o outro time comendo poeira. Complementando a inovação da placa no antepé na 12, a Nike Mercurial Vapor 13 Academy confere uma placa versátil para múltiplas superfícies que proporciona tração em gramados naturais e artificiais.',
          product_image: 'umbro-speed-iv.png',
          product_price: '189,90',
          product_brand: 'Umbro',
          product_main_color: 'blue'
        },
      ])
    });
};

