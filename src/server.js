import app from './app';

const port = process.env.PORT || 8081;

app.listen(port, () => {
    console.log('Server is running in PORT', port);
});
