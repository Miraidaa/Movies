$(document).ready(function(){
    var apiBaseURL = 'https://api.themoviedb.org/3/';
    var imageBaseUrl = 'https://image.tmdb.org/t/p/';
    var apiKey = 'secret info';  

    const nowPlayingURL = apiBaseURL + 'movie/now_playing?api_key=' + apiKey;

    function getNowPlayingData(){
        $.getJSON(nowPlayingURL, function(nowPlayingData){
            for(let i = 0; i < nowPlayingData.results.length; i++){
                var mid = nowPlayingData.results[i].id;
                var thisMovieUrl = apiBaseURL + 'movie/' + mid + '/videos?api_key=' + apiKey;

                $.getJSON(thisMovieUrl, function(movieKey){
                    var poster = imageBaseUrl + 'w300' + nowPlayingData.results[i].poster_path;
                    var title = nowPlayingData.results[i].original_title;
                    var releaseDate = nowPlayingData.results[i].release_date;
                    var overview = nowPlayingData.results[i].overview;
                    var voteAverage = nowPlayingData.results[i].vote_average;
                    var youtubeKey = movieKey.results.length > 0 ? movieKey.results[0].key : '';
                    var youtubeLink = 'https://www.youtube.com/watch?v=' + youtubeKey;

                    var nowPlayingHTML = '';
                    nowPlayingHTML += '<div class="col-sm-3 eachMovie">';
                    nowPlayingHTML += '<button type="button" class="btnModal" data-toggle="modal" data-target="#exampleModal'+ i + '">' + '<img src="'+ poster +'"></button>';
                    nowPlayingHTML += '<div class="modal fade" id="exampleModal'+ i + '" tabindex="-1" role="dialog">';
                    nowPlayingHTML += '<div class="modal-dialog" role="document">';
                    nowPlayingHTML += '<div class="modal-content">';
                    nowPlayingHTML += '<div class="col-sm-6 moviePosterInModal"><a href="'+ youtubeLink +'"><img src="'+ poster +'"></a></div>';
                    nowPlayingHTML += '<div class="col-sm-6 movieDetails">';
                    nowPlayingHTML += '<div class="movieName">' + title + '</div>';
                    nowPlayingHTML += '<div class="release">Release Date: ' + releaseDate + '</div>';
                    nowPlayingHTML += '<div class="overview">' + overview + '</div>';
                    nowPlayingHTML += '<div class="rating">Rating: ' + voteAverage + '/10</div>';
                    nowPlayingHTML += '</div></div></div></div></div>';
                    $('#movie-grid').append(nowPlayingHTML);
                });
            }
            $('#movieGenreLabel').html("Now Playing");
        });
    }

    function getMoviesByGenre(genre_id){
        const genreURL = apiBaseURL + 'discover/movie?api_key=' + apiKey + '&with_genres=' + genre_id;
        $('#movie-grid').html('');
        $.getJSON(genreURL, function(genreData){
            for(let i = 0; i < genreData.results.length; i++){
                var mid = genreData.results[i].id;
                var thisMovieUrl = apiBaseURL + 'movie/' + mid + '/videos?api_key=' + apiKey;

                $.getJSON(thisMovieUrl, function(movieKey){
                    var poster = imageBaseUrl + 'w300' + genreData.results[i].poster_path;
                    var title = genreData.results[i].original_title;
                    var releaseDate = genreData.results[i].release_date;
                    var overview = genreData.results[i].overview;
                    var voteAverage = genreData.results[i].vote_average;
                    var youtubeKey = movieKey.results.length > 0 ? movieKey.results[0].key : '';
                    var youtubeLink = 'https://www.youtube.com/watch?v=' + youtubeKey;

                    var genreHTML = '';
                    genreHTML += '<div class="col-sm-3 eachMovie">';
                    genreHTML += '<button type="button" class="btnModal" data-toggle="modal" data-target="#exampleModal'+ i + '">' + '<img src="'+ poster +'"></button>';
                    genreHTML += '<div class="modal fade" id="exampleModal'+ i + '" tabindex="-1" role="dialog">';
                    genreHTML += '<div class="modal-dialog" role="document">';
                    genreHTML += '<div class="modal-content">';
                    genreHTML += '<div class="col-sm-6 moviePosterInModal"><a href="'+ youtubeLink +'"><img src="'+ poster +'"></a></div>';
                    genreHTML += '<div class="col-sm-6 movieDetails">';
                    genreHTML += '<div class="movieName">' + title + '</div>';
                    genreHTML += '<div class="release">Release Date: ' + releaseDate + '</div>';
                    genreHTML += '<div class="overview">' + overview + '</div>';
                    genreHTML += '<div class="rating">Rating: ' + voteAverage + '/10</div>';
                    genreHTML += '</div></div></div></div></div>';
                    $('#movie-grid').append(genreHTML);
                });
            }
            $('#movieGenreLabel').html("Genre");
        });
    }

    function searchMovies(searchTerm){
        const searchURL = apiBaseURL + 'search/movie?api_key=' + apiKey + '&query=' + searchTerm;
        $('#movie-grid').html('');
        $.getJSON(searchURL, function(searchResults){
            for (let i = 0; i < searchResults.results.length; i++){
                var mid = searchResults.results[i].id;
                var thisMovieUrl = apiBaseURL + 'movie/' + mid + '/videos?api_key=' + apiKey;

                $.getJSON(thisMovieUrl, function(movieKey){
                    var poster = imageBaseUrl + 'w300' + searchResults.results[i].poster_path;
                    var title = searchResults.results[i].original_title;
                    var releaseDate = searchResults.results[i].release_date;
                    var overview = searchResults.results[i].overview;
                    var voteAverage = searchResults.results[i].vote_average;
                    var youtubeKey = movieKey.results.length > 0 ? movieKey.results[0].key : '';
                    var youtubeLink = 'https://www.youtube.com/watch?v=' + youtubeKey;

                    var searchHTML = '';
                    searchHTML += '<div class="col-sm-3 eachMovie">';
                    searchHTML += '<button type="button" class="btnModal" data-toggle="modal" data-target="#exampleModal'+ i + '">' + '<img src="'+ poster +'"></button>';
                    searchHTML += '<div class="modal fade" id="exampleModal'+ i + '" tabindex="-1" role="dialog">';
                    searchHTML += '<div class="modal-dialog" role="document">';
                    searchHTML += '<div class="modal-content">';
                    searchHTML += '<div class="col-sm-6 moviePosterInModal"><a href="'+ youtubeLink +'"><img src="'+ poster +'"></a></div>';
                    searchHTML += '<div class="col-sm-6 movieDetails">';
                    searchHTML += '<div class="movieName">' + title + '</div>';
                    searchHTML += '<div class="release">Release Date: ' + releaseDate + '</div>';
                    searchHTML += '<div class="overview">' + overview + '</div>';
                    searchHTML += '<div class="rating">Rating: ' + voteAverage + '/10</div>';
                    searchHTML += '</div></div></div></div></div>';
                    $('#movie-grid').append(searchHTML);
                });
            }
            $('#movieGenreLabel').html("Search Results");
        });
    }

    
    $('.nowPlaying').click(function(){ getNowPlayingData(); });
    $('#action').click(function(){ getMoviesByGenre(28); });
    $('#adventure').click(function(){ getMoviesByGenre(12); });
    $('#animation').click(function(){ getMoviesByGenre(16); });
    $('#comedy').click(function(){ getMoviesByGenre(35); });
    $('#crime').click(function(){ getMoviesByGenre(80); });

    $('.searchForm').submit(function(event){
        event.preventDefault();
        var searchTerm = $('.form-control').val();
        searchMovies(searchTerm);
    });

    getNowPlayingData();
});
