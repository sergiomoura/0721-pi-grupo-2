const produtos = [
  {
    id: 1,
    nome: 'Paleta De Blush E Iluminador Feels Mood Langglow',
    categorias_id: 2,
    preco: 100.00,
    img: 'paleta blush.wedp',
    img1: 'paleta blush2.wedp',
    img2: 'paleta blush3.wedp',
    descricao: 'A paleta de sombras Ready For Ruby Rose tem 20 tons, sendo 8 sombras metálicas, 5 opacas, e 7 glitters cremosos. São tons de azul, roxo, marrons, preto, branco e dourado. São muitas opções e infinitas combinações para destacar o seu olhar. Além disso, as sombras são pigmentadas e macias e sua embalagem é compacta. Imagens meramente ilustrativas. Visualizações em mobile e desktop podem sofrer alterações de cor. ',
    detalhes: 'A paleta Blush e Iluminador feels mood é a escolha certa para obter uma pele corada e iluminada a qualquer momento. Traz 4 tons versáteis em 2 texturas para você fazer sucesso no look! Perfeita para todos os tipos de pele. Com alta pigmentação, fixação e durabilidade que proporcionam um efeito glow e natural a sua pele. Essa super paleta tem acabamento uniforme, leve e toque aveludado que vai te surpreender. O produto é vegano, livre de parabenos, testado dermatologicamente e cruelty-free.',
    composicao: 'Possui textura leve Enriquecido com óleo de avocado  Brilho incolor nos lábios Aromas diferentes: Referência: HB8222, Peso: 8g, Dimensões 11x2x2',
    precausao: 'Somente para uso externo. Não aplicar sobre a pele irritada. Em caso de irritação e vermelhidão, suspender o uso e procurar orientação médica. Manter fora do alcance das crianças. Em caso de contato acidental com os olhos, enxaguar com água abundantemente. Este produto não foi testado em gestantes e lactantes, consulte seu médico antes de utilizá-lo. Mantenha o produto protegido da luz e do calor.',
  },
  {
    id: 2,
    nome: 'BLUSH LÍQUIDO K.O GAME ON',
    categorias_id: 2,
    preco: 30.00,
    img: 'blush.webp',
    img1: 'blush2.wedp',
    img2: 'blush3.wedp',
    descricao: 'A paleta de sombras Ready For Ruby Rose tem 20 tons, sendo 8 sombras metálicas, 5 opacas, e 7 glitters cremosos. São tons de azul, roxo, marrons, preto, branco e dourado. São muitas opções e infinitas combinações para destacar o seu olhar. Além disso, as sombras são pigmentadas e macias e sua embalagem é compacta. Imagens meramente ilustrativas. Visualizações em mobile e desktop podem sofrer alterações de cor. ',
    detalhes: 'O Blush líquido GAME ON é perfeito para dar aspecto corado e natural, proporcionando efeito de pele saudável e viçosa. Sua textura líquida auxilia espalhar o produto, promovendo rápida absorção e pigmentação. Super versátil, ele pode ser aplicado nas bochechas, olhos e lábios. São quatro opções de cores para dar um UP na sua maquiagem',
    composicao: 'Possui textura leve Enriquecido com óleo de avocado  Brilho incolor nos lábios Aromas diferentes: Referência: HB8222, Peso: 8g, Dimensões 11x2x2',
    precausao: 'Somente para uso externo. Não aplicar sobre a pele irritada. Em caso de irritação e vermelhidão, suspender o uso e procurar orientação médica. Manter fora do alcance das crianças. Em caso de contato acidental com os olhos, enxaguar com água abundantemente. Este produto não foi testado em gestantes e lactantes, consulte seu médico antes de utilizá-lo. Mantenha o produto protegido da luz e do calor.'
  },
  {
    id: 3,
    nome: 'Blush Compacto Melu - Caramel',
    categorias_id: 2,
    preco: 25.00,
    img: 'po compacto.webp',
    img1: 'po compacto 1.wedp',
    img2: 'po compacto 2.wedp',
    descricao: 'A paleta de sombras Ready For Ruby Rose tem 20 tons, sendo 8 sombras metálicas, 5 opacas, e 7 glitters cremosos. São tons de azul, roxo, marrons, preto, branco e dourado. São muitas opções e infinitas combinações para destacar o seu olhar. Além disso, as sombras são pigmentadas e macias e sua embalagem é compacta. Imagens meramente ilustrativas. Visualizações em mobile e desktop podem sofrer alterações de cor. ',
    detalhes: 'Para bochechas contornadas saudáveis e mais alegre? O Blush Compacto Melu é a solução. O segredo do sucesso está na nossa fórmula: um produto de alta pigmentação com efeito natural, que é fácil de aplicar e de espalhar e que possui textura fina com toque aveludado. Tudo, né? Sabe aquele blush que tem o poder de mudar a make e trazer aquele ar bem romântico? Pronto, agora ele é seu. Escolha uma das 5 cores e arrase na make.',
    composicao: 'Possui textura leve Enriquecido com óleo de avocado  Brilho incolor nos lábios Aromas diferentes: Referência: HB8222, Peso: 8g, Dimensões 11x2x2',
    precausao: 'Uso externo. Manter fora do alcance das crianças. Não ingerir. Em caso de contato acidental com os olhos, enxaguar abundantemente. Não utilizar sobre a pele irritada ou lesionada. Em caso de sensibilidade dérmica, procure orientação médica. Manter em local seco e arejado',
  },
  {
    id: 4,
    nome: 'Sérum Facial Detox Melu',
    categorias_id: 5,
    preco: 40.00,
    img: 'serum.webp',
    img1: 'serum 2.webp',
    img2: 'serum 3.wedp',
    descricao: 'A paleta de sombras Ready For Ruby Rose tem 20 tons, sendo 8 sombras metálicas, 5 opacas, e 7 glitters cremosos. São tons de azul, roxo, marrons, preto, branco e dourado. São muitas opções e infinitas combinações para destacar o seu olhar. Além disso, as sombras são pigmentadas e macias e sua embalagem é compacta. Imagens meramente ilustrativas. Visualizações em mobile e desktop podem sofrer alterações de cor. ',
    detalhes: 'Dando adeus com alegria a oleosidade da pele, Sérum Detox Melu com fresco e cheirinho de melancia. Composto por ativos tonificantes e calmantes cuidará da sua pele de dentro para fora controlando a oleosidade e brilho sem ressecá-la. Mantendo o PH da sua pele equilibrado e protegendo contra futuras acnes. Cuidar da pele com Melu nunca foi tão gostoso.',
    composicao: 'Possui textura leve Enriquecido com óleo de avocado  Brilho incolor nos lábios Aromas diferentes: Referência: HB8222, Peso: 8g, Dimensões 11x2x2',
    precausao: 'Somente para uso externo. Não ingerir. Não aplicar sobre a pele irritada. Em caso de irritação e vermelhidão, suspender o uso e procurar orientação médica. Manter fora do alcance das crianças. Em caso de contato acidental com os olhos, enxaguar com água abundantemente. Este produto não foi testado em gestantes e lactantes, consulte seu médico antes de utilizá-lo. Mantenha o produto protegido da luz e do calor.'
  },
  {
    id: 5,
    nome: 'Paleta De Sombra Shine Glitter - Black - Langglow',
    categorias_id: 1,
    preco: 80.00,
    img: 'Paleta De Glitter.jpg',
    img1: 'Paleta De Glitter 2.jpg',
    img2: '',
    descricao: 'A paleta de sombras Ready For Ruby Rose tem 20 tons, sendo 8 sombras metálicas, 5 opacas, e 7 glitters cremosos. São tons de azul, roxo, marrons, preto, branco e dourado. São muitas opções e infinitas combinações para destacar o seu olhar. Além disso, as sombras são pigmentadas e macias e sua embalagem é compacta. Imagens meramente ilustrativas. Visualizações em mobile e desktop podem sofrer alterações de cor. ',
    detalhes: 'A paleta Shine é uma paleta de glitter prensado, com 9 tons de puro brilho, perfeita para quem ama brilhar. A paleta contém tons neutros e coloridos, como prata, dourado, roxo, rosa, verde, vermelho, preto, e azul, podendo criar makes maravilhosas. Com certeza você vai chamar atenção por onde passar com esse brilho todo. Ele pode ser aplicado diretamente na pálpebra, não precisando de fixador para colar. Imagens meramente ilustrativas. Visualizações em mobile e desktop podem sofrer alterações de cor.',
    composicao: 'Possui textura leve Enriquecido com óleo de avocado  Brilho incolor nos lábios Aromas diferentes: Referência: HB8222, Peso: 8g, Dimensões 11x2x2',
    precausao: 'Somente para uso externo. Não ingerir. Não aplicar sobre a pele irritada. Em caso de irritação e vermelhidão, suspender o uso e procurar orientação médica. Manter fora do alcance das crianças. Em caso de contato acidental com os olhos, enxaguar com água abundantemente. Este produto não foi testado em gestantes e lactantes, consulte seu médico antes de utilizá-lo. Mantenha o produto protegido da luz e do calor'

  },
  {
    id: 6,
    nome: '',
    categorias_id: 1,
    preco: 70.00,
    img: 'Paleta De Sombras Ready For.webp',
    img1: 'Paleta De Sombras Ready For 2.webp',
    img2: '',
    descricao: 'A paleta de sombras Ready For Ruby Rose tem 20 tons, sendo 8 sombras metálicas, 5 opacas, e 7 glitters cremosos. São tons de azul, roxo, marrons, preto, branco e dourado. São muitas opções e infinitas combinações para destacar o seu olhar. Além disso, as sombras são pigmentadas e macias e sua embalagem é compacta. Imagens meramente ilustrativas. Visualizações em mobile e desktop podem sofrer alterações de cor. ',
    detalhes: 'A paleta de sombras Ready For Ruby Rose tem 20 tons, sendo 8 sombras metálicas, 5 opacas, e 7 glitters cremosos. São tons de azul, roxo, marrons, preto, branco e dourado. São muitas opções e infinitas combinações para destacar o seu olhar. Além disso, as sombras são pigmentadas e macias e sua embalagem é compacta. Imagens meramente ilustrativas. Visualizações em mobile e desktop podem sofrer alterações de cor. ',
    composicao: 'Possui textura leve Enriquecido com óleo de avocado  Brilho incolor nos lábios Aromas diferentes: Referência: HB8222, Peso: 8g, Dimensões 11x2x2',
    precausao: 'Somente para uso externo. Não ingerir. Não aplicar sobre a pele irritada. Em caso de irritação e vermelhidão, suspender o uso e procurar orientação médica. Manter fora do alcance das crianças. Em caso de contato acidental com os olhos, enxaguar com água abundantemente. Este produto não foi testado em gestantes e lactantes, consulte seu médico antes de utilizá-lo. Mantenha o produto protegido da luz e do calor'

  }, {
    id: 7,
    nome: 'Base Liquida Feels - Cafe Com Leite 40 - Rubyrose',
    categorias_id: 2,
    preco: 32.00,
    img: 'base liquida.webp',
    img1: '',
    img2: '',
    descricao: 'A paleta de sombras Ready For Ruby Rose tem 20 tons, sendo 8 sombras metálicas, 5 opacas, e 7 glitters cremosos. São tons de azul, roxo, marrons, preto, branco e dourado. São muitas opções e infinitas combinações para destacar o seu olhar. Além disso, as sombras são pigmentadas e macias e sua embalagem é compacta. Imagens meramente ilustrativas. Visualizações em mobile e desktop podem sofrer alterações de cor. ',
    detalhes: 'A base da linha Feels proporciona uma cobertura média, capaz de construir camadas na maquiagem, ideal para quem quer corrigir imperfeições e uniformizar o tom da pele. Sua textura é em mousse, dando um toque viçoso e aveludado. Disponível em 21 cores e em categorias como: Nude, Bege, Chocolate e Café, ela é indicada para todos os tipos de pele.',
    composicao: 'Possui textura leve Enriquecido com óleo de avocado  Brilho incolor nos lábios Aromas diferentes: Referência: HB8222, Peso: 8g, Dimensões 11x2x2',
    precausao: 'Somente para uso externo. Não ingerir. Não aplicar sobre a pele irritada. Em caso de irritação e vermelhidão, suspender o uso e procurar orientação médica. Manter fora do alcance das crianças. Em caso de contato acidental com os olhos, enxaguar com água abundantemente. Este produto não foi testado em gestantes e lactantes, consulte seu médico antes de utilizá-lo. Mantenha o produto protegido da luz e do calor'

  }, {
    id: 8,
    nome: 'Paleta Para Sobrancelha - Langglow',
    categorias_id: 4,
    preco: 28.00,
    img: 'palheta_sombrancelha1.webp',
    img1: 'palheta_sombrancelha2.webp',
    img2: '',
    descricao: 'A paleta de sombras Ready For Ruby Rose tem 20 tons, sendo 8 sombras metálicas, 5 opacas, e 7 glitters cremosos. São tons de azul, roxo, marrons, preto, branco e dourado. São muitas opções e infinitas combinações para destacar o seu olhar. Além disso, as sombras são pigmentadas e macias e sua embalagem é compacta. Imagens meramente ilustrativas. Visualizações em mobile e desktop podem sofrer alterações de cor. ',
    detalhes: 'A Sombra Para Sobrancelhas da Ruby Rose tem uma alta pigmentação, contendo um espelho e três cores de sombras, Marrom Claro, Marrom Médio e Preto acompanhado por um primer para uma alta duração e fixação da sua maquiagem. Contém um pincel duo, podendo ser usado para delinear e esfumar.',
    composicao: 'Possui textura leve Enriquecido com óleo de avocado  Brilho incolor nos lábios Aromas diferentes: Referência: HB8222, Peso: 8g, Dimensões 11x2x2',
    precausao: 'Somente para uso externo. Não ingerir. Não aplicar sobre a pele irritada. Em caso de irritação e vermelhidão, suspender o uso e procurar orientação médica. Manter fora do alcance das crianças. Em caso de contato acidental com os olhos, enxaguar com água abundantemente. Este produto não foi testado em gestantes e lactantes, consulte seu médico antes de utilizá-lo. Mantenha o produto protegido da luz e do calor'

  }, {
    id: 9,
    nome: 'Bruma Facial Fixadora Matte Basics - Rubyrose',
    categorias_id: 2,
    preco: 30.00,
    img: 'bruma.png',
    img1: 'bruma2.png',
    img2: '',
    descricao: 'A paleta de sombras Ready For Ruby Rose tem 20 tons, sendo 8 sombras metálicas, 5 opacas, e 7 glitters cremosos. São tons de azul, roxo, marrons, preto, branco e dourado. São muitas opções e infinitas combinações para destacar o seu olhar. Além disso, as sombras são pigmentadas e macias e sua embalagem é compacta. Imagens meramente ilustrativas. Visualizações em mobile e desktop podem sofrer alterações de cor. ',
    detalhes: 'A Bruma Facial Matte da linha Basics auxilia na fixação e duração da maquiagem, mantendo uma pele firme e com efeito matte. Composta por extratos de algas, camomila, aloe vera, Hamamelis, ácido hialurônico, pantenol, óleo de rícino e chá branco, pode ser usada antes e depois da maquiagem.',
    composicao: 'Possui textura leve Enriquecido com óleo de avocado  Brilho incolor nos lábios Aromas diferentes: Referência: HB8222, Peso: 8g, Dimensões 11x2x2',
    precausao: 'Somente para uso externo. Não ingerir. Não aplicar sobre a pele irritada. Em caso de irritação e vermelhidão, suspender o uso e procurar orientação médica. Manter fora do alcance das crianças. Em caso de contato acidental com os olhos, enxaguar com água abundantemente. Este produto não foi testado em gestantes e lactantes, consulte seu médico antes de utilizá-lo. Mantenha o produto protegido da luz e do calor'

  }, {
    id: 10,
    nome: 'Batom Líquido STAY FIX',
    categorias_id: 3,
    preco: 20.00,
    img: 'gloss1.png',
    img1: 'gloss2.png',
    img2: '',
    descricao: 'A paleta de sombras Ready For Ruby Rose tem 20 tons, sendo 8 sombras metálicas, 5 opacas, e 7 glitters cremosos. São tons de azul, roxo, marrons, preto, branco e dourado. São muitas opções e infinitas combinações para destacar o seu olhar. Além disso, as sombras são pigmentadas e macias e sua embalagem é compacta. Imagens meramente ilustrativas. Visualizações em mobile e desktop podem sofrer alterações de cor. ',
    detalhes: 'O Batom Líquido Stay Fix é leve e hidratante, desliza sem esforço nos lábios deixando uma cor intensa e uma sensação aveludada e confortável o dia todo, sem ressecar ou craquelar. Proporciona alta cobertura em apenas uma camada com efeito matte, longa duração e alta fixação.',
    composicao: 'Possui textura leve Enriquecido com óleo de avocado  Brilho incolor nos lábios Aromas diferentes: Referência: HB8222, Peso: 8g, Dimensões 11x2x2',
    precausao: 'Somente para uso externo. Não ingerir. Não aplicar sobre a pele irritada. Em caso de irritação e vermelhidão, suspender o uso e procurar orientação médica. Manter fora do alcance das crianças. Em caso de contato acidental com os olhos, enxaguar com água abundantemente. Este produto não foi testado em gestantes e lactantes, consulte seu médico antes de utilizá-lo. Mantenha o produto protegido da luz e do calor'

  }, {
    id: 11,
    nome: 'O GLOSS BALM ',
    categorias_id: 3,
    preco: 26.00,
    img: 'gloss_blam.png',
    img1: '',
    img2: '',
    descricao: 'A paleta de sombras Ready For Ruby Rose tem 20 tons, sendo 8 sombras metálicas, 5 opacas, e 7 glitters cremosos. São tons de azul, roxo, marrons, preto, branco e dourado. São muitas opções e infinitas combinações para destacar o seu olhar. Além disso, as sombras são pigmentadas e macias e sua embalagem é compacta. Imagens meramente ilustrativas. Visualizações em mobile e desktop podem sofrer alterações de cor. ',
    detalhes: 'O GLOSS BALM é ideal para auxiliar contra o ressecamento dos seus lábios. Com óleo de avocado em sua composição, que é rico em nutrientes e possui propriedades antioxidantes, irá ajudar a revitalizar a pele, promovendo hidratação.',
    composicao: 'Possui textura leve Enriquecido com óleo de avocado  Brilho incolor nos lábios Aromas diferentes: Referência: HB8222, Peso: 8g, Dimensões 11x2x2',
    precausao: 'Somente para uso externo. Não ingerir. Não aplicar sobre a pele irritada. Em caso de irritação e vermelhidão, suspender o uso e procurar orientação médica. Manter fora do alcance das crianças. Em caso de contato acidental com os olhos, enxaguar com água abundantemente. Este produto não foi testado em gestantes e lactantes, consulte seu médico antes de utilizá-lo. Mantenha o produto protegido da luz e do calor'

  }, {
    id: 12,
    nome: 'SCRUBBY - ESFOLIANTE LABIAL',
    categorias_id: 3,
    preco: 50.00,
    img: 'esfoliante_labios1.png',
    img1: 'esfoliante_labios2.png',
    img2: 'esfoliante_labios3.png',
    descricao: 'A paleta de sombras Ready For Ruby Rose tem 20 tons, sendo 8 sombras metálicas, 5 opacas, e 7 glitters cremosos. São tons de azul, roxo, marrons, preto, branco e dourado. São muitas opções e infinitas combinações para destacar o seu olhar. Além disso, as sombras são pigmentadas e macias e sua embalagem é compacta. Imagens meramente ilustrativas. Visualizações em mobile e desktop podem sofrer alterações de cor. ',
    detalhes: 'O Scrubby é perfeito para você que ama dar os cuidados que seus lábios merecem! Com manteiga de cacau e óleo de avocado em sua composição, auxiliam na restauração e regeneração da pele fina dos lábios, eliminando as células mortas.',
    composicao: 'Possui textura leve Enriquecido com óleo de avocado  Brilho incolor nos lábios Aromas diferentes: Referência: HB8222, Peso: 8g, Dimensões 11x2x2',
    precausao: 'Somente para uso externo. Não ingerir. Não aplicar sobre a pele irritada. Em caso de irritação e vermelhidão, suspender o uso e procurar orientação médica. Manter fora do alcance das crianças. Em caso de contato acidental com os olhos, enxaguar com água abundantemente. Este produto não foi testado em gestantes e lactantes, consulte seu médico antes de utilizá-lo. Mantenha o produto protegido da luz e do calor'

  }, {
    id: 13,
    nome: 'Gel Tint',
    categorias_id: 3,
    preco: 34.00,
    img: 'Gel tint.png',
    img1: 'Gel tint2.png',
    img2: '',
    descricao: 'A paleta de sombras Ready For Ruby Rose tem 20 tons, sendo 8 sombras metálicas, 5 opacas, e 7 glitters cremosos. São tons de azul, roxo, marrons, preto, branco e dourado. São muitas opções e infinitas combinações para destacar o seu olhar. Além disso, as sombras são pigmentadas e macias e sua embalagem é compacta. Imagens meramente ilustrativas. Visualizações em mobile e desktop podem sofrer alterações de cor. ',
    detalhes: 'A nova pedida perfeita para você que adora realçar a cor natural dos seus lábios. São 3 tons para dar aquela aparência saudável e corada na make. Ele tem longa duração, ótima pigmentação deixando seus lábios coradinhos o dia todo! Sabe o melhor de tudo? Ele não escorre, não transfere e possui componentes para deixar seus lábios hidratados. O Gel Tint tem ação multifuncional que pode ser usado em lábios e bochechas.',
    composicao: 'Possui textura leve Enriquecido com óleo de avocado  Brilho incolor nos lábios Aromas diferentes: Referência: HB8222, Peso: 8g, Dimensões 11x2x2',
    precausao: 'Somente para uso externo. Não ingerir. Não aplicar sobre a pele irritada. Em caso de irritação e vermelhidão, suspender o uso e procurar orientação médica. Manter fora do alcance das crianças. Em caso de contato acidental com os olhos, enxaguar com água abundantemente. Este produto não foi testado em gestantes e lactantes, consulte seu médico antes de utilizá-lo. Mantenha o produto protegido da luz e do calor'

  }, {
    id: 14,
    nome: 'Gel Tint Summer Coral',
    categorias_id: 3,
    preco: 29.00,
    img: 'summer coral.png',
    img1: 'summer coral1.png',
    img2: 'summer coral2.png',
    descricao: 'A paleta de sombras Ready For Ruby Rose tem 20 tons, sendo 8 sombras metálicas, 5 opacas, e 7 glitters cremosos. São tons de azul, roxo, marrons, preto, branco e dourado. São muitas opções e infinitas combinações para destacar o seu olhar. Além disso, as sombras são pigmentadas e macias e sua embalagem é compacta. Imagens meramente ilustrativas. Visualizações em mobile e desktop podem sofrer alterações de cor. ',
    detalhes: 'O Gel Tint é perfeito para realçar a cor natural dos seus lábios. São 4 tonalidades para dar aquela aparência saudável e corada na make. Ele tem longa duração, ótima pigmentação que deixa os seus lábios coradinhos o dia todo. Ele não escorre e não transfere. Ah, e cada um deles tem um cheirinho delicioso. Além disso o Gel Tint é super versátil e pode ser usado nas bochechas como blush líquido. É só aplicar duas a três gotinhas e espalhar para ganhar aquele efeito corado de praia. Esse Gel Tint ainda possui dois componentes que irão deixar seus lábios super hidratados e saudáveis que é o ácido hialurônico e D-Pantenol.',
    composicao: 'Possui textura leve Enriquecido com óleo de avocado  Brilho incolor nos lábios Aromas diferentes: Referência: HB8222, Peso: 8g, Dimensões 11x2x2',
    precausao: 'Somente para uso externo. Não ingerir. Não aplicar sobre a pele irritada. Em caso de irritação e vermelhidão, suspender o uso e procurar orientação médica. Manter fora do alcance das crianças. Em caso de contato acidental com os olhos, enxaguar com água abundantemente. Este produto não foi testado em gestantes e lactantes, consulte seu médico antes de utilizá-lo. Mantenha o produto protegido da luz e do calor'

  }, {
    id: 15,
    nome: 'Discos De Algodao Ruby Skin - Rubyrose',
    categorias_id: 5,
    preco: 10.00,
    img: 'algodao.webp',
    img1: 'algodao1.webp',
    img2: '',
    descricao: 'A paleta de sombras Ready For Ruby Rose tem 20 tons, sendo 8 sombras metálicas, 5 opacas, e 7 glitters cremosos. São tons de azul, roxo, marrons, preto, branco e dourado. São muitas opções e infinitas combinações para destacar o seu olhar. Além disso, as sombras são pigmentadas e macias e sua embalagem é compacta. Imagens meramente ilustrativas. Visualizações em mobile e desktop podem sofrer alterações de cor. ',
    detalhes: 'Disco de algodão Ruby Skin. Nosso algodão facial é ideal para remoção de maquiagem e limpeza de pele. Com alto poder de absorção e livre de impurezas, os discos são fabricados 100% com algodão. Possuem textura delicada e macia. Indicado para todos os tipos de pele.',
    composicao: 'Possui textura leve Enriquecido com óleo de avocado  Brilho incolor nos lábios Aromas diferentes: Referência: HB8222, Peso: 8g, Dimensões 11x2x2',
    precausao: 'Manter fora do alcance de crianças e animais domésticos. Em caso de irritação, descontinue o uso e procure o seu médico. Produto não estéril de uso único. Conservar em local limpo, fresco, sexo e ventilado.'

  }, {
    id: 16,
    nome: 'Esponja De Maquiagem Feels Mood ',
    categorias_id: 2,
    preco: 27.00,
    img: 'esponja.png',
    img1: '',
    img2: '',
    descricao: 'A paleta de sombras Ready For Ruby Rose tem 20 tons, sendo 8 sombras metálicas, 5 opacas, e 7 glitters cremosos. São tons de azul, roxo, marrons, preto, branco e dourado. São muitas opções e infinitas combinações para destacar o seu olhar. Além disso, as sombras são pigmentadas e macias e sua embalagem é compacta. Imagens meramente ilustrativas. Visualizações em mobile e desktop podem sofrer alterações de cor. ',
    detalhes: 'A esponja Feels Mood possui formato anatômico multifuncional e facilita a aplicação de produtos líquidos ou em pó. Macia, flexível e livre de látex, traz a praticidade para sua maquiagem no dia a dia.',
    composicao: 'Possui textura leve Enriquecido com óleo de avocado  Brilho incolor nos lábios Aromas diferentes: Referência: HB8222, Peso: 8g, Dimensões 11x2x2',
    precausao: 'Somente para uso externo. Não ingerir. Não aplicar sobre a pele irritada. Em caso de irritação e vermelhidão, suspender o uso e procurar orientação médica. Manter fora do alcance das crianças. Em caso de contato acidental com os olhos, enxaguar com água abundantemente. Este produto não foi testado em gestantes e lactantes, consulte seu médico antes de utilizá-lo. Mantenha o produto protegido da luz e do calor'
  }

]

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('produtos', produtos, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('produtos', null, {});
  }
};
