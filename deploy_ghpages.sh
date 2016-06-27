


git clone https://github.com/ggho/fanyau-web.git ../tmp
cd ../tmp
git checkout gh-pages

# clean up current folder
rm -rf *

#TOFIX: Copy only committed files
# copy updated files here
cp -a ../WebApp/app/. ./

# git add all files
git add *

if [ -z "$1" ]
  then
	git commit -m 'new deploy'
else
	git commit -m $1
fi
git push origin HEAD

# delete the tmp folder after user
rm -rf ../tmp
