# Movie Center

Platform pembelian film digital yang
dirancang untuk memudahkan Anda memiliki koleksi film favorit
secara permanen. Dengan antarmuka yang sederhana dan mudah
digunakan, Movie Center menyediakan berbagai pilihan film dari
berbagai genre dan memastikan pengalaman pembelian yang cepat
dan aman.

## Demo

[link demo website](https://moviecenter.anomali99.my.id)

## Tech Stack

- Vite
- React JS
- TypeScript
- TailwindCSS
- Axios

## API

API yang digunakan dalam aplikasi ini adalah API open source dari [The Movie Databases](https://developer.themoviedb.org/reference/intro/getting-started).

#### API yang digunakan

- [Movie popular list](https://developer.themoviedb.org/reference/movie-popular-list)
- [Movie top rated list](https://developer.themoviedb.org/reference/movie-top-rated-list)
- [Movie details](https://developer.themoviedb.org/reference/movie-details)

## Installation

#### 1. Clone repositories

```cmd
git clone https://github.com/Anomali99/movie-center.git
```

#### 2. Install dependencies

```cmd
cd movie-center
npm install
```

#### 3. Add env

```env
VITE_NO_WA=62800000
VITE_FB_ID=67099
VITE_LINKDIN_ID=fulan-1245
VITE_GITHUB_NAME=Anomali99
VITE_EMAIL=fulan@gmail.com

VITE_IMAGE_URL=https://image.tmdb.org/t/p/w500
VITE_BASE_API=https://api.themoviedb.org/3/movie
VITE_API_KEY=
VITE_API_TOKEN=
```

#### 4. Run

```cmd
npm run dev
```

or

```cmd
npm run build
```
