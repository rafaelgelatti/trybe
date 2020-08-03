#!/bin/bash

#10

DAY=$(date +%F)

for FILE in `ls *.png`
  do
    mv $FILE ${DAY}-${FILE}
  done

#11

#!/bin/bash

DIRECTORY=$1
EXTENSION=$2

DAY=$(date +%F)

cd $DIRECTORY

for FILE in `ls *.$EXTENSION`
  do
    echo "Renomeando $FILE para ${DAY}-${FILE}"
    mv $FILE ${DAY}-${FILE}
  done