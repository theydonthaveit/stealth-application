wget "https://binaries.cockroachdb.com/cockroach-v1.0.4.linux-amd64.tgz"
sleep 15s
tar xfz cockroach-v1.0.4.linux-amd64.tgz
cp -i cockroach-v1.0.4.linux-amd64/cockroach /usr/local/bin
cockroach version
