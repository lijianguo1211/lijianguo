[03-Aug-2019 11:28:29] NOTICE: PHP message: PHP Warning: PHP Startup: Unable to load dynamic library 'fileinfo' (tried: /www/server/php/72/lib/php/extensions/no-debug-non-zts-20170718/fileinfo (/www/server/php/72/lib/php/extensions/no-debug-non-zts-20170718/fileinfo: cannot open shared object file: No such file or directory), /www/server/php/72/lib/php/extensions/no-debug-non-zts-20170718/fileinfo.so (/www/server/php/72/lib/php/extensions/no-debug-non-zts-20170718/fileinfo.so: cannot open shared object file: No such file or directory)) in Unknown on line 0
[03-Aug-2019 11:28:29] ERROR: An another FPM instance seems to already listen on /tmp/php-cgi-72.sock
[03-Aug-2019 11:28:29] ERROR: FPM initialization failed
The Process class relies on proc_open, which is not available on your PHP installation
open_basedir restriction in effect
is not within the allowed path(s)
