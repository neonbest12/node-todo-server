import HttpStatus from 'http-status-codes';

import logger from '../utils/logger';
import buildError from '../utils/buildError';

export function notFound(req, res) {
  res.status(HttpStatus.NOT_FOUND).json({
    error: {
      code: HttpStatus.NOT_FOUND,
      message: HttpStatus.getStatusText(HttpStatus.NOT_FOUND)
    }
  });
}

export function methodNotAllowed(req, res) {
  res.status(HttpStatus.METHOD_NOT_ALLOWED).json({
    error: {
      code: HttpStatus.METHOD_NOT_ALLOWED,
      message: HttpStatus.getStatusText(HttpStatus.METHOD_NOT_ALLOWED)
    }
  });
}

export function bodyParser(err, req, res, next) {
  logger.error(err.message);

  res.status(err.status).json({
    error: {
      code: err.status,
      message: HttpStatus.getStatusText(err.status)
    }
  });
}

export function genericErrorHandler(err, req, res, next) {
  logger.error(err.stack);
  const error = buildError(err);

  res.status(error.code).json({ error });
}
