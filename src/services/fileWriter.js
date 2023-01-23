class Filewriter {}
Filewriter.filewriter = (newString, path) => {
    console.log('programming needed in Filewriter.filewriter');
    console.log(newString);
    console.log('=====================');
    console.log('Opening file....');
    let bw = new BufferedWriter(new FileWriter(path, true));
    console.log('Opening file.... ' + path);
    console.log('Writing to file....');
    bw.append(newString);
    bw.newLine();
    bw.close();
    try {
        console.log('=====================');
        console.log('Opening file....');
        let pathRyan = 'F:\\Online syncs\\ONEDRIVE 2020 DEC\\OneDrive\\Documenten\\NEW-the-avengers\\files\\AvengersMeetingLog_backup.txt';
        let ryanAvengers_bw = new BufferedWriter(new FileWriter(pathRyan, true));
        console.log('Writing to file....');
        ryanAvengers_bw.append(newString);
        ryanAvengers_bw.newLine();
        ryanAvengers_bw.close();
    } catch (e) {
        console.log(e);
    }
    console.log('Done!');
};
