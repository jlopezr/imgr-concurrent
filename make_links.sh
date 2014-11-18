#!/bin/bash
for i in {1..100}
do
    ln -s ../image.jpg ./public/image$i.jpg 
done
cat <<EOT >> ./public/index.html
<html>
<body>
EOT

for i in {1..100}
do
    declare -x LINK="/public/100x/image$i.jpg"
    echo "<img src=\"$LINK\"/>" >> ./public/index.html
done

cat <<EOT2 >> ./public/index.html
</body>
<html>
EOT2
