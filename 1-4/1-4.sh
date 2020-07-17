# 1 - Navegue até a pasta unix_tests;

cd unix_tests

# 2 - Crie um arquivo texto pelo terminal com o nome skills2.txt e adicione os valores Internet, Unix e Bash, um em cada linha.

touch skills2.txt
cat > skills2.txt
Internet
Unix
Bash

# 3 - Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal. 🤓

cat >> skills2.txt
Mercury
Venus
Earth
Mars
Jupiter

sort skills2.txt

# 4 - Conte quantas linhas tem o arquivo skills2.txt.

wc -l skills2.txt

# 5 - Crie um arquivo chamado top_skills.txt usando o skills2.txt, contendo as 3 primeiras skills em ordem alfabética.

sort < skills2 | head -3 > top_skills.txt

# 6 - Crie um novo arquivo chamado phrases2.txt pelo o terminal e adicione algumas frases de suas escolha.

touch phrases2.txt
cat > phrases2.txt
Carl Sagan
Pale Blue Dot
Albert Camus
The Absurd

# 7 - Conte o número de linhas que contêm as letras br.

grep -i br phrases2.txt | wc -l

# 8 - Conte o número de linhas que não contêm as letras br.

grep -vi br phrases2.txt | wc -l

# 9 - Adicione dois nomes de países ao final do arquivo phrases2.txt.

cat >> phrases2.txt
Brazil
Argentina

# 10 - Crie um novo arquivo chamado bunch_of_things.txt com os conteúdos dos arquivos phrases2.txt e countries.txt

cat phrases2.txt countries.txt > bunch_of_things.txt

# 11 - Ordene o arquivo bunch_of_things.txt.

sort -o bunch_of_things.txt bunch_of_things.txt

# 12 - Navegue até a pasta unix_tests;

cd .

# 13 - Rode o comando ls -l e veja quais as permissões dos arquivos;

ls -l

# 14 - Mude a permissão do arquivo bunch_of_things.txt para que todos os usuários possam ter acesso à leitura e escrita, e verifique se está correto com o comando ls -l;

chmod a+rw bunch_of_things.txt
ls -l
# 'a+rw' a=all r=read w=write

# 15 - Tire a permissão de escrita do arquivo bunch_of_things.txt para todos os usuários, verifique se está correto com o comando ls -l;

chmod a-w bunch_of_things.txt
ls -l

# 16 - Volte à permissão do arquivo bunch_of_things.txt para a listada inicialmente utilizando o comando chmod 644 bunch_of_things.txt. Leia este artigo para entender mais sobre o que é e como funciona essa numeração 644.

chmod 664 bunch_of_things.txt

# 17 - Liste todos os processos;

ps

# 18 - Agora use o comando sleep 30 &;

sleep 30 &

# 19 - Use a listagem de processos para encontrar o PID do processo que está executando o comando sleep 30 e termine a sua execução (mate o processo);

ps
kill -9 #PID(numero do processo/processo id)

# 20 - Execute novamente o comando sleep 30, mas agora sem o &. Depois, faça com que ele continue executando em background;

sleep 30
^Z
bg

# 21 - Crie um processo em background que rode o comando sleep por 300 segundos.

sleep 300 &

# 22 - Crie mais dois processos que rodem o comando sleep por 200 e 100 segundos, respectivamente. Você deve criá-los em foreground (sem usar o &) e enviá-los para background após cada um começar a executar.

sleep 200
^Z
bg
sleep 100
^Z
bg

# 23 - Verifique que apenas o processo sleep 300 está em execução com o comando jobs. Suspenda a execução desse processo (você vai precisar trazer o processo para foreground e suspendê-lo, ou enviar um sinal).

jobs
kill -9 %jobnumber

# 24 - Retome a execução do processo sleep 100 em background.

jobs
fg %jobnumber

# 25 - Termine a execução de todos os processos sleep (mate os processos).

jobs
kill -9 %jobnumber %jobnumber # Quantos for necessário para terminar todos