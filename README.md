# Mata Mosquito

**Mata Mosquito** é um jogo simples e divertido onde o objetivo é clicar nos mosquitos que aparecem na tela antes que eles escapem. O jogo tem três níveis de dificuldade: Normal, Difícil e Muito Difícil, que alteram a velocidade com que os mosquitos aparecem.

## Tecnologias Utilizadas

- **HTML5**: Estrutura básica do jogo.
- **CSS3**: Estilização dos elementos.
- **JavaScript**: Lógica do jogo, manipulação do DOM e criação de interatividade.
- **Bootstrap 4**: Estilização e layout responsivo.

## Como Jogar

1. **Escolha um Nível**: Selecione o nível de dificuldade no menu inicial.
   - **Normal**: Velocidade normal dos mosquitos.
   - **Difícil**: Mosquitos aparecem mais rápido.
   - **Muito Difícil**: Os mosquitos são extremamente rápidos.

2. **Iniciar o Jogo**: Clique no botão "Iniciar Jogo" após selecionar o nível.

3. **Clique nos Mosquitos**: Mosquitos aparecerão em posições aleatórias na tela. Clique neles para matá-los antes que desapareçam. Se você não conseguir clicar em um mosquito, você perderá uma vida.

4. **Vidas**: Você começa com 3 vidas. Se perder todas, o jogo acaba.

5. **Vença o Jogo**: O jogo tem um cronômetro de 10 segundos. Se conseguir sobreviver até o final do cronômetro, você vence!

## Estrutura do Projeto

- `index.html`: Página inicial do jogo onde o jogador seleciona o nível e inicia o jogo.
- `app.html`: Página onde o jogo acontece, com a lógica para posicionar os mosquitos e contar o tempo e vidas.
- `style.css`: Estilos personalizados para o jogo.
- `img/`: Pasta que contém as imagens utilizadas no jogo (mosquito, corações, etc).
- `fim_de_jogo.html`: Página exibida quando o jogador perde todas as vidas.
- `vitoria.html`: Página exibida quando o jogador vence o jogo.

## Como Executar o Projeto

1. Clone este repositório:
    ```bash
    git clone https://github.com/gabiruexe/app-mata-mosquito.git
    ```

2. Navegue até a pasta do projeto:
    ```bash
    cd app-mata-mosquito
    ```

3. Abra o arquivo `index.html` em seu navegador para começar a jogar.

## Melhorias Futuras

- Adicionar efeitos sonoros para cada ação do jogo.
- Criar uma pontuação baseada no tempo restante e na quantidade de mosquitos clicados.
- Implementar um sistema de níveis progressivos.

## Contribuição

Sinta-se à vontade para contribuir com melhorias no código ou novos recursos. Basta fazer um fork do projeto, criar uma branch com suas alterações e enviar um pull request.
