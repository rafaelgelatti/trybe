# 1 - Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu: crie um diretório chamado unix_tests e navegue até ele.

mkdir unix_tests
cd unix_tests

# 2 - Crie um arquivo de texto com o nome trybe.txt.

touch trybe.txt

# 3 - Crie uma cópia do arquivo trybe.txt com nome trybe_backup.txt.

cp trybe.txt trybe_backup.txt

# 4 - Renomeie o arquivo trybe.txt.

mv trybe.txt beTrybe.txt

# 5 - Dentro de unix_tests, crie um novo diretório chamado backup.

mkdir backup
cd backup

# 6 - Mova o arquivo trybe_backup.txt para o diretório backup.

mv ../trybe_backup.txt ./trybe_backup.txt

# 7 - Dentro de unix_tests, crie um novo diretório chamado backup2.

cd ..
mkdir backup2

# 8 - Mova o arquivo trybe_backup.txt da pasta backup para a pasta backup2.

mv ./backup/trybe_backup.txt ./backup2/trybe_backup.txt

# 9 - Apague a pasta backup.

rmdir backup

# 10 - Renomeie a pasta backup2 para backup.

mvdir backup2/ backup/

# 11 - Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.

pwd
ls -l

# 12 - Apague o diretório backup.

rm ./backup/trybe_backup.txt
rmdir ./backup

# 13 - Limpe o terminal.

clear

# Para os exercícios, 14 e 15, crie um arquivo de texto com o conteúdo abaixo, chamado skills.txt:
Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL

touch skills.txt
cat > skills.txt
Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL

# 14 - Mostre na tela as 5 primeiras skills do arquivo skills.txt.

cat skills.txt | head -5

# 15 - Mostre na tela as 4 últimas skills do arquivo skills.txt.

cat skills.txt | tail -4

# 16 - Apague todos os arquivos que terminem em .txt.

rm *.txt

# 17 - Na pasta unix-tests, baixe um arquivo com os nomes de todos os países do mundo utilizando o comando curl:

curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

# 18 - Mostre todo o conteúdo do arquivo countries.txt na tela.

cat countries.txt

# 19 - Mostre o conteúdo de countries.txt, página por página, até encontra a Zambia.

less countries.txt
# 'f' para passar página por página denbtro do '%less'.

# 20 - Mostre novamente o conteúdo de countries.txt página por página, mas agora utilize um comando para buscar por Zambia.

less -i countries.txt
/Zambia
# '-i' para case sensitive
# '/' para iniciar busca dentro do '%less -i'

# 21 - Busque por Brazil no countries.txt.

less -i countries.txt
/Brazil

# 22 - Busque novamente por brazil, mas agora utilizando o lower case.

less -i countries.txt
/brazil
# '-i' para case sensitive
# '/' para iniciar busca dentro do '%less -i'

# Para os próximos exercícios, crie um novo arquivo chamado phrases.txt e adicione algumas frases a sua escolha. Não precisa criar o arquivo pelo terminal.

touch phrases.txt
cat > phrases.txt
We are the music makers
And we are the dreamers of the dreams
Wandering by lone sea-breakers
And sitting by desolate streams
World losers and world forsakers
On who the pale moon gleams
Yet we are the movers and the shakers
Of the world forever, it seems
I am looking for a fox

# 23 - Busque pelas frases que não contenham a palavra Fox.

grep -vi Fox phrases.txt
# '-v' para buscar NOT
# '-i' para case sensitive

# 24 - Conte o número de palavras do arquivo phrases.txt.

wc -w phrases.txt
# '-w' para contar palavras

# 25 - Conte o número de linhas do arquivo phrases.txt.

wc -l phrases.txt
# '-l' para linhas

# 26 - Crie os arquivos empty.tbt e empty.pdf.

touch empty.tbt
touch empty.pdf

# 27 - Liste todos os arquivos do diretório unix_tests.

ls -l

# 28 - Liste todos os arquivos que terminem com txt.

ls *.txt

# 29 - Liste todos os arquivos que terminem com tbt ou txt.

ls *.txt *.tbt

# 30 - Acesse o manual do comando ls.

man ls