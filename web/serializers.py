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
    dicti['number'] = serie.number
    dicti['name'] = serie.name
    dicti['release_date'] = serie.release_date
    dicti['description'] = serie.description
    dicti['duration'] = serie.duration
    dicti['preview'] = serie.preview

    return dicti


def film_to_dict(film):
    dicti = {}
    dicti['id'] = film.id
    dicti['name'] = film.name
    dicti['release_date'] = film.release_date
    dicti['description'] = film.description
    dicti['duration'] = film.duration
    dicti['preview'] = film.preview

    return dicti
