## Adicionar um Itinerário

. Preencha o formulário com as informações sobre a viagem:
 -  Destino: Onde você vai.
 -  Data de Início e Data de Término: Datas da viagem.
 -  Voo: Detalhes do voo (ex: Voo 1234).
 -  Hotel: Detalhes do hotel (ex: Hotel ABC).
 -  Atividades: Atividades planejadas para a viagem (separadas por vírgula).
. Clique no botão Adicionar Viagem para salvar.

## Visualizar e Excluir Itinerários

. Depois de adicionar um itinerário, ele será exibido abaixo do formulário.
. Para excluir um itinerário, clique no botão Excluir ao lado da viagem correspondente.

## Estrutura do Projeto

. O projeto possui a seguinte estrutura de arquivos:

planejador-de-viagem/
├── index.html       # Arquivo HTML principal
├── style.css        # Arquivo de estilo CSS
├── script.js        # Arquivo JavaScript para manipulação de dados
├── README.md        # Este arquivo de documentação

. Como Funciona

1. index.html

. O arquivo HTML contém a estrutura da página, incluindo um formulário para o usuário inserir os dados da viagem e uma lista para exibir os itinerários salvos.

2. style.css

. Este arquivo contém os estilos básicos para tornar a interface do usuário agradável e fácil de usar. Ele inclui:

  - Estilos para o formulário de entrada.
  - Estilos para a lista de itinerários.
  - Estilos para os botões de ação.

3. script.js

. O JavaScript é responsável por manipular os dados da aplicação, incluindo a adição, exibição e exclusão dos itinerários:

loadTrips(): Carrega os itinerários salvos no LocalStorage e exibe-os na lista.

saveTrips(): Salva a lista de itinerários no LocalStorage.

Adicionar Viagem: O evento de envio do formulário que captura as informações inseridas e as salva no LocalStorage.

Excluir Viagem: Quando o botão "Excluir" é clicado, o itinerário correspondente é removido do LocalStorage.

4. LocalStorage
O LocalStorage é utilizado para salvar e persistir os itinerários de viagem no navegador. Cada viagem é salva como um objeto JSON que é convertido de volta para um array de itinerários quando a página é recarregada.