
# Uniflix
Uniflix is a streaming platform that offers a wide range of local content, including movies and TV shows. Or at least it should be. Today it is simply a personal project created to practice technologies such as: React, Node.js, Mongo and Docker
## Architecture

<p align="center">
  <img src="https://uce347e5f1b4833db51efe66715f.previews.dropboxusercontent.com/p/thumb/AB2gI-Nt0ZldQTXtnnhT2Ay_dr85EJxsqL-BHw_4DYG8UH3RvDoQD4b_bCDPZ4mX7x9b4S9btOAZKjuuVV_Nyu8FnJKInP0vQh4Fqg8u_h3JMb9gCSIoD_7s5HZtR99Cj0IDy_2HSeOxxiU0oprTV8T9Ngl147TR_YUjjemIoEhD4uOBlf7abw4N73vxLwjag3_kE9EW2fDPyaGBAzR6lI0G5ouC9UM8bJebQGBF4AFoQ7ldaiXnp-__Nd-b0og3VOWPKwtsPFnqNrYJqlvp42dQZjh8hBbqQ3RNyu1xknV2KQZm3kR4RhvZhT4-Gvk6STMPpKvPmAca1yswYeItaDNcP5TCB5vQk59hMc8qapoPvBXTigxOeYRXhN-Nm4ZuWCoGmPzn79w25LIKWN_57SFz7caTVevxd21MhWqJKIQq1g/p.png" width=400/>
</p>

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
## Preview
<p align="center">
  <img src="https://uc8815ad8ca397f9bb8f18c36603.previews.dropboxusercontent.com/p/thumb/AB3RKylynplpvyy-zg1zgy9h6RqRfvKCegbMX1wuAY9Ezk5g3uF26umATMqxskSAZVWJzDDuLIlJzccZ4h4j_RXKRkCCX36qgyplDpxtTeGDGpXAk9SHmC_IFOeNxvcw59Rh4hvpdJ-iDIyU3OJngQ2-u4er35IoALB6v34cGVIDXDna5Ctm9KqCwXM-J_24fJheUQmGPd1HYOkou4kSIYBQBr2lcS172_9QaCYYG4QNhBTpwxRcM2ICuWDor33XINXbqBUKgL5BDBfkbXZ2AZ4Ig_N_dNdBnppI_GBruGaDdit7BX61FO92xuNINZtb8uwHRN_UjjSKeNYjN3ViWzKS2TrKZFI20KwefMmh-i6VWo3FXxO75hF4TDQ5pGlEJIfYKZLx48YO8GQZ4zUynvVUfe1OI4BUfMdIWXF_QnThTPFHVMYoJWsGI1qIU6Bcx8jiXQjKESdbNdQfSxtAtBI8jIi91tCM54TfB-obYpA_6w/p.png" />
</p>

## Authors

- [@loreand95](https://www.github.com/loreand95)

