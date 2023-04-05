
# Uniflix
Uniflix is a streaming platform that offers a wide range of local content, including movies and TV shows. Or at least it should be. Today it is simply a personal project created to practice technologies such as: React, Spring, Node.js and Docker
## Architecture

![Overall Architecture](https://uc2dda988edc82acd762a5317ca9.previews.dropboxusercontent.com/p/thumb/AB3SCDN7hdf7CQRo43aZzREmQ8MjuuPrCEW1WcPtggLgvT8xMDWEpRmAQ47LC1HnoutBVFJgGSbJeJTTpy843MzzfSvqf--zE2Uy7Fijt7VvYOI1kDhj53kwAaL7ameFiDbY2HsqpqeE2gngCem5bm41nTRKXzsbXBOs2BrsCEyQVdtqAtidQ7fDxwZBwFInrWcsWv8tdBvxir0-1VMew-aeRbQKPJrepVx9Kqeyy-mHuaswglvRP0phEyEGwYw4j_TewEYZFVg34p2H38AznmeyFYY4OMdqafughebb755vwVqfz6vZ_hJmrbNwSxMvx-Ge-wRO9cQfrstIlvRja5ioTXNkqPArAKEJPIOA00WQIsHpejGJhj3gQlRTJ10M75sEZJOCSzwXReHWCRa5lJbVBC3Qt0zh3vtj740N9iOLIA/p.png)
## How to deploy
### Add Env 

Create a file named `.env` in the root of the project and add the following environments:
```
SHOP_SERVICE_URI=https://loreand.it:3001/rest
MOVIE_SERVICE_URI=http://loreand.it:3002/rest
USER_SERVICE_URI=http://loreand.it:3003/rest
```

### Add SSL Certifications
Add ssl certificates inside `/webapp`
```
📦 uniflix
└─ /webapp
   ├─ my-cert.cer
   └─ my-cert.key
```

### Run
Run wit docker-compose
```
docker-compose up --build
```
## Authors

- [@loreand95](https://www.github.com/loreand95)
