const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const tokensRouter = require('./routes/tokensRouter');
const authRouter = require('./routes/authRouter');
const apiCommentsRouter = require('./routes/apiCommentsRouter');
const apiUsersRouter = require('./routes/apiUsersRouter');
const apiCulturesRouter = require('./routes/apiCulturesRouter');
const apiRecRouter = require('./routes/apiRecRouter');

const apiLessonsRouter = require('./routes/apiLessonsRouter');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.static('public'));
app.use(express.json());

app.use('/tokens', tokensRouter);
app.use('/auth', authRouter);
app.use('/api/comments', apiCommentsRouter);
app.use('/api/users', apiUsersRouter);
app.use('api/lessons', apiLessonsRouter);
app.use('/api/cultures', apiCulturesRouter);
app.use('/api/rec', apiRecRouter);


app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
