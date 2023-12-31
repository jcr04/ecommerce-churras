const products = [
  {
    _id: "1",
    name: "Linguiça toscana com queijo coalho",
    image: "/images/6.png",
    description:
    <p>Sem conservantes, congelamento rápido, sem hormônios.<br>
    </br><br>
    </br>INFORMAÇÕES NUTRICIONAIS:<br>
    </br>Porção de 50g (1/2 und)<br>
    </br><br>
    </br>Valor energético - 113kcal / 475kJ - 6%<br>
    </br>Carboidratos - 0g - 0%<br>
    </br>Proteínas - 7,5g - 10%<br>
    </br>Gorduras totais - 9g - 16%<br>
    </br>Gorduras saturadas - 4g - 18%<br>
    </br>Gorduta trans - 0g - (**%)<br>
    </br>Fibra alimentar - 0g - 0%<br>
    </br>Sódio - 500mg - 18%<br>
    </br><br>
    </br>*% Valores diários com base em uma dieta de 2.000kcal ou 8.400kJ. Seu valores
    podem ser maiores ou menores dependendo de suas necessidades energéticas.<br>
    </br>**VD não estabelecido.
    </p>,
    price: 18,
    countInStock: 100,
    rating: 4,
    numReviews: 4,
  },
  {
    _id: "2",
    name: "Linguiça toscana com alho e ervas",
    image: "/images/5.png",
    description:
    <p>Sem conservantes, congelamento rápido, sem hormônios.<br>
    </br><br>
    </br>INFORMAÇÕES NUTRICIONAIS:<br>
    </br>Porção de 50g (1/2 und)<br>
    </br><br>
    </br>Valor energético - 117kcal / 491kJ - 6%<br>
    </br>Carboidratos - 1,5g - 1%<br>
    </br>Proteínas - 7,5g - 10%<br>
    </br>Gorduras totais - 9g - 16%<br>
    </br>Gorduras saturadas - 2,7g - 12%<br>
    </br>Gorduta trans - 0g - (**%)<br>
    </br>Fibra alimentar - 0g - 0%<br>
    </br>Sódio - 440mg - 16%<br>
    </br><br>
    </br>*% Valores diários com base em uma dieta de 2.000kcal ou 8.400kJ. Seu valores
    podem ser maiores ou menores dependendo de suas necessidades energéticas.<br>
    </br>**VD não estabelecido.
    </p>,
    price: 18,
    countInStock: 100,
    rating: 2,
    numReviews: 2,
  },
  {
    _id: "3",
    name: "Linguiça de frango com bacon ",
    image: "/images/4.png",
    description:
    <p>Sem conservantes, congelamento rápido, sem hormônios.<br>
    </br><br>
    </br>INFORMAÇÕES NUTRICIONAIS:<br>
    </br>Porção de 50g (1/2 und)<br>
    </br><br>
    </br>Valor energético - 95kcal / 399kJ - 5%<br>
    </br>Carboidratos - 1g - 0%<br>
    </br>Proteínas - 7g - 9%<br>
    </br>Gorduras totais - 7g - 13%<br>
    </br>Gorduras saturadas - 2,1g - 10%<br>
    </br>Gorduta trans - 0g - (**%)<br>
    </br>Fibra alimentar - 0g - 0%<br>
    </br>Sódio - 440mg - 16%<br>
    </br><br>
    </br>*% Valores diários com base em uma dieta de 2.000kcal ou 8.400kJ. Seu valores
    podem ser maiores ou menores dependendo de suas necessidades energéticas.<br>
    </br>**VD não estabelecido.
    </p>,
    price: 18,
    countInStock: 100,
    rating: 3.5,
    numReviews: 3,
  },
  {
    _id: "4",
    name: "Coxa de frango",
    image: "/images/3.png",
    description:
      <p>Sem conservantes, congelamento rápido, sem hormônios.<br>
      </br><br>
      </br>INFORMAÇÕES NUTRICIONAIS:<br>
      </br>Porção de 82g (1/2 und)<br>
      </br><br>
      </br>Valor energético - 125kcal / 525kJ - 6%<br>
      </br>Carboidratos - 0g - 0%<br>
      </br>Proteínas - 15g - 20%<br>
      </br>Gorduras totais - 7,4g - 13%<br>
      </br>Gorduras saturadas - 1,6g - 7%<br>
      </br>Gorduta trans - 0g - (**%)<br>
      </br>Fibra alimentar - 0g - 0%<br>
      </br>Sódio - 93mg - 4%<br>
      </br><br>
      </br>*% Valores diários com base em uma dieta de 2.000kcal ou 8.400kJ. Seu valores
      podem ser maiores ou menores dependendo de suas necessidades energéticas.<br>
      </br>**VD não estabelecido.
      </p>,
    price: 15,
    countInStock: 100,
    rating: 5,
    numReviews: 1,
  },
  {
    _id: "5",
    name: "Asa inteira de frango",
    image: "/images/2.png",
    description:
    <p>Sem conservantes, congelamento rápido, sem hormônios.<br>
    </br><br>
    </br>INFORMAÇÕES NUTRICIONAIS:<br>
    </br>Porção de 70g (1/4 und)<br>
    </br><br>
    </br>Valor energético - 126kcal / 529kJ - 6%<br>
    </br>Carboidratos - 0g - 0%<br>
    </br>Proteínas - 13g - 17%<br>
    </br>Gorduras totais - 8,4g - 15%<br>
    </br>Gorduras saturadas - 2,1g - 10%<br>
    </br>Gorduta trans - 0g - (**%)<br>
    </br>Fibra alimentar - 0g - 0%<br>
    </br>Sódio - 60mg - 3%<br>
    </br><br>
    </br>*% Valores diários com base em uma dieta de 2.000kcal ou 8.400kJ. Seu valores
    podem ser maiores ou menores dependendo de suas necessidades energéticas.<br>
    </br>**VD não estabelecido.
    </p>,
    price: 25,
    countInStock: 100,
    rating: 4,
    numReviews: 2,
  },
  {
    _id: "6",
    name: "Coração de frango",
    image: "/images/1.png",
    description:
      <p>Sem conservantes, congelamento rápido, sem hormônios.<br>
      </br><br>
      </br>INFORMAÇÕES NUTRICIONAIS:<br>
      </br>Porção de 100g (10 unds)<br>
      </br><br>
      </br>Valor energético - 125kcal / 525kJ - 6%<br>
      </br>Carboidratos - 0g - 0%<br>
      </br>Proteínas - 11g - 15%<br>
      </br>Gorduras totais - 9g - 16%<br>
      </br>Gorduras saturadas - 1,7g - 8%<br>
      </br>Gorduta trans - 0g - (**%)<br>
      </br>Fibra alimentar - 0g - 0%<br>
      </br>Sódio - 75mg - 3%<br>
      </br><br>
      </br>*% Valores diários com base em uma dieta de 2.000kcal ou 8.400kJ. Seu valores
      podem ser maiores ou menores dependendo de suas necessidades energéticas.<br>
      </br>**VD não estabelecido.
      </p>,
    price: 22,
    countInStock: 100,
    rating: 4,
    numReviews: 1,
  },
];

export default products;
