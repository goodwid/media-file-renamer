# movie file renamer

Renames scene-style movie files to "Movie Name - year.ext".

It announces the title and release data, renames the file, and sets the atime and ctime of the file to the release date.

example:

``` sh
$ node index.js Citizen.Kane.1941.DVDRip.x264.AC3.mkv
Citizen Kane was released on 05 Sep 1941
$ ls
-rw-------   1 user user    0 Sep  5  1941 Citizen Kane (1941).mkv
```
## Warranty
If you break it, you get to keep both pieces.


Get your API key from [omdbapi.com](http://www.omdbapi.com/apikey.aspx) and put it in .env

Also, donate to them, cuz they rock.

I don't know if OMDB has a rate-limited API.  I haven't run this on a whole directory yet, just onesies, so I don't know.  YMMV.  Don't abuse APIs.  And donate.

## Plans
* convert this into a CLI app that can do all tasks optionally, break out the API call, ctime update, rename, etc. to flags or default behaviors.  Someday, maybe the next time filebot utterly fails me.
* add support for other APIs
