# Getting started

Do you have access to the DB you want to clean? No? Talk to Sam.

After you've gotten added to the project, you know the drill:
Run 

make bootstrap

Modify the makefile to target your db. Then run

make start

Then copy our the new DB from the output file, and put it in the test. Might need to modify the slug names,
depending on the client.

Clean the folder up with make clean when you're done