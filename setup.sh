cd ../
mkdir techlipse_folder
mv ./techlipse ./techlipse_folder
wait
sudo mv ./techlipse_folder /var/www/html
wait
cd /var/www/html/techlipse_folder

echo -e '\n\n ########## Creating Virtual Environment ###########'
python3 -m virtualenv .env
wait
source .env/bin/activate
git clone https://github.com/sea-rod/xavier-connect.git
wait
cd ./xavier-connect


echo -e '\n\n ########## Installing python packages ###########'
pip3 install -r ./xconnect_backend/requirements.txt
wait
### django setup ###
echo -e '\n\n ########## Django Setup ###########'
cd ./xconnect_backend
python3 manage.py migrate
wait
python manage.py collectstatic
wait


### react setup ###
echo -e '\n\n ########## Installing react packages ###########'
cd ../xconnect_frontend/xconnect
npm i
wait
echo -e '\n\n ########## React Setup ###########'
npm run build
sudo npm install -g serve
wait

sudo mv ../../xconnect_backend/ngnix_conf /etc/nginx/sites-available/
sudo ln -s /etc/nginx/sites-available/ngnix_conf /etc/nginx/sites-enabled/


echo "####################################"
echo "Setup Complete"
