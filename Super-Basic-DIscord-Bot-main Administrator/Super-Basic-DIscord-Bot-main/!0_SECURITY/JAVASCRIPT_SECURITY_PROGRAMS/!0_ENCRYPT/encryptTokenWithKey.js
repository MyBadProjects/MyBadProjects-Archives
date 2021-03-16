const Cryptr = require('cryptr');
const fs = require('fs');

fs.readFile('key',
    function(err, data) { 
        if (err) throw err;
        console.log(`Key: ${data.toString('utf8')}`);

        
        const cryptr = new Cryptr(data.toString('utf8'));

        fs.readFile('token',
            function(err2, data2) {
                if (err2) throw err2;
                console.log(`Token: ${data2.toString('utf8')}`);
                
                const encryptedString = cryptr.encrypt(data2.toString('utf8'));
                console.log(`Encrypted Token: ${encryptedString}`);

                fs.writeFile('../encryptedToken', encryptedString, 
                    function(err3) {
                        if (err3) throw err3;
                    })
            })
});