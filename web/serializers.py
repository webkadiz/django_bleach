def season_to_dict(season):
    dicti = {}
    dicti['id'] = season.id
    dicti['number'] = season.number
    dicti['release_date'] = season.release_date
    dicti['description'] = season.description

    return dicti


def serie_to_dict(serie):
    dicti = {}
    dicti['id'] = serie.id
    dicti['season_id'] = serie.season_id
    dicti['number'] = serie.number
    dicti['name'] = serie.name
    dicti['release_date'] = serie.release_date
    dicti['description'] = serie.description
    dicti['duration'] = serie.duration
    dicti['preview'] = serie.preview
    dicti['player'] = serie.player

    return dicti


def film_to_dict(film):
    dicti = {}
    dicti['id'] = film.id
    dicti['name'] = film.name
    dicti['release_date'] = film.release_date
    dicti['description'] = film.description
    dicti['duration'] = film.duration
    dicti['preview'] = film.preview
    dicti['player'] = film.player

    return dicti


def comment_to_dict(comment):
    dicti = {}
    dicti['id'] = comment.id
    dicti['season_id'] = comment.season_id
    dicti['serie_id'] = comment.serie_id
    dicti['film_id'] = comment.film_id
    dicti['name'] = comment.name
    dicti['content'] = comment.content

    return dicti


def character_to_dict(character):
    dicti = {}
    dicti['id'] = character.id
    dicti['name'] = character.name
    dicti['appear_serie_id'] = character.appear_serie_id

    return dicti
