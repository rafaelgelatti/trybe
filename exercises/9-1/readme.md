<h3>9.1 - JavaScript - Assíncrono e callBacks</h3>


---


<strong>exercise1.js</strong> Dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?

<strong>exercise2.js</strong> Agora, dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?

<strong>exercise3.js</strong> A função getPlanet abaixo imprime o planeta Marte de forma síncrona. Modifique getPlanet, de forma que Marte seja<br>
impresso assincronamente, depois de 4 segundos.

<strong>exercises4.js</strong> Suponha que você precise simular uma mensagem enviada do robô Curiosity de Marte para a Terra.<br>
O Curiosity envia para a Terra a temperatura atual em Marte, gastando um tempo variável de até 5 segundos para que termine o envio.<br>
Crie a função sendMarsTemperature, que imprime a temperatura em Marte.

<strong>exercise5.js</strong> Agora que você fez a função que envia a temperatura de Marte, suponha que você consiga enviar para o robô Curiosity<br>
o que você deseja fazer, uma vez obtida com sucesso a temperatura em Marte. Logo, adicione na função sendMarsTemperature um callback que contenha<br>
as ações a serem tomadas em cima da temperatura.

<strong>exercise6.js</strong> Por fim, o robô Curiosity tem uma taxa de sucesso de envio de mensagem de 60% devido ao fato de o robô já estar<br>
muito ocupado com outras operações. Logo, adicione na função sendMarsTemperature um outro callback que contenha as ações a serem tomadas em caso de falha.