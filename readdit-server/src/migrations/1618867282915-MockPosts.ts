import { MigrationInterface, QueryRunner } from 'typeorm';

export class MockPosts1618867282915 implements MigrationInterface {
	public async up(_: QueryRunner): Promise<void> {
		// await queryRunner.query(`
		// insert into post (title, text, "creatorId", "createdAt") values ('Pillow of Death', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.
		// In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.
		// Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 1, '2020-12-04T21:30:47Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Supercross', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.
		// Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.
		// Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 1, '2020-12-30T21:44:59Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Dead Snow 2: Red vs. Dead ', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.
		// Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.
		// Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 1, '2020-09-17T00:11:26Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Abominable Dr. Phibes, The', 'In congue. Etiam justo. Etiam pretium iaculis justo.
		// In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 1, '2021-02-13T11:03:28Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Alan & Naomi', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.
		// Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 1, '2020-10-16T06:04:44Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Christmas Carol, A (Scrooge)', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 1, '2020-04-19T17:23:43Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Snow White (Blancanieves)', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.
		// In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 1, '2020-12-01T16:01:10Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Another Thin Man', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.
		// Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 1, '2020-05-05T18:02:15Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Air Hawks', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.
		// Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 1, '2020-07-02T11:55:41Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Big Bounce, The', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 1, '2020-07-13T15:24:18Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Comanche Moon', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.
		// Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 1, '2020-07-21T11:45:30Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Daylight Robbery', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.
		// Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 1, '2020-05-12T17:42:49Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Fugitive, The', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.
		// Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.
		// Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 1, '2020-12-31T11:48:18Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Stickup, The', 'Fusce consequat. Nulla nisl. Nunc nisl.
		// Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 1, '2021-01-11T19:51:30Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Lola and Billy the Kid (Lola + Bilidikid)', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.
		// Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
		// Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 1, '2020-05-12T08:44:24Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('In the Realm of the Senses (Ai no corrida)', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.
		// Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 1, '2020-07-19T13:15:33Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Sympathy for the Devil', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
		// Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.
		// Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 1, '2020-05-18T04:40:21Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Public Enemy, The', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.
		// Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1, '2021-02-26T08:55:49Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Pat and Mike', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 1, '2020-05-31T05:40:22Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Japanese Summer: Double Suicide (Muri shinjû: Nihon no natsu)', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.
		// Sed ante. Vivamus tortor. Duis mattis egestas metus.
		// Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 1, '2020-07-10T20:24:19Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Chinese Puzzle (Casse-tête chinois)', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
		// Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 1, '2021-02-15T17:29:11Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Return to the 36th Chamber (Shao Lin da peng da shi) ', 'Fusce consequat. Nulla nisl. Nunc nisl.
		// Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 1, '2021-03-20T11:32:54Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Armless', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 1, '2020-09-22T07:15:46Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('The Town that Dreaded Sundown', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 1, '2020-09-27T09:55:01Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Follow the Bitch', 'In congue. Etiam justo. Etiam pretium iaculis justo.
		// In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 1, '2020-08-19T18:06:20Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('In the House', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.
		// Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 1, '2021-02-19T23:34:31Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Doogal', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 1, '2020-07-08T22:53:42Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Nasty Old People', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.
		// Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.
		// Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 1, '2020-11-21T19:15:38Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Into the Abyss', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.
		// Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.
		// Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 1, '2020-08-04T17:42:40Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Best of Ernie and Bert, The', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 1, '2020-10-09T01:09:54Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Happy New Year', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 1, '2020-09-17T14:51:59Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Decoder', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 1, '2020-05-11T08:16:50Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Boy Meets Girl', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.
		// Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 1, '2021-02-06T22:21:33Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Such Hawks Such Hounds', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.
		// Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 1, '2020-06-28T05:23:37Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Divide, The', 'Fusce consequat. Nulla nisl. Nunc nisl.
		// Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 1, '2020-08-18T22:22:54Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Entre nos (Between Us)', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.
		// Phasellus in felis. Donec semper sapien a libero. Nam dui.', 1, '2020-05-29T02:13:14Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Knute Rockne All American', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 1, '2021-04-05T18:18:07Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Dances Sacred and Profane', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.
		// Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.
		// Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 1, '2020-11-25T08:23:08Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Faith School Menace?', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.
		// Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.
		// In congue. Etiam justo. Etiam pretium iaculis justo.', 1, '2021-03-06T17:13:22Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Clara''s Heart', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.
		// Sed ante. Vivamus tortor. Duis mattis egestas metus.
		// Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 1, '2020-08-19T04:59:07Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Ballad of the Paper Balloons (a.k.a. Humanity and Paper Balloons) (Ninjô kami fûsen)', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.
		// Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 1, '2020-05-05T14:39:26Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Broadway', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.
		// Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.
		// In congue. Etiam justo. Etiam pretium iaculis justo.', 1, '2021-04-08T11:42:32Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Morning Patrol (Proini peripolos)', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.
		// Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.
		// Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 1, '2020-08-05T07:29:55Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Empire', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.
		// Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.
		// Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 1, '2020-08-13T15:15:33Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Suburbia', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 1, '2020-10-10T22:50:03Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Family Tree, The', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.
		// Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.
		// Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 1, '2021-03-22T18:42:30Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Farewell to the King', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 1, '2020-11-02T06:08:47Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Young at Heart', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.
		// Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 1, '2021-02-22T22:27:39Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Rules of Attraction, The', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.
		// Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 1, '2020-08-27T05:59:46Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Story of Qiu Ju, The (Qiu Ju da guan si)', 'In congue. Etiam justo. Etiam pretium iaculis justo.
		// In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.
		// Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 1, '2020-05-19T11:43:03Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('A Run for Your Money', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.
		// Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 1, '2020-11-06T04:12:16Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Conquest, The (La conquête)', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.
		// Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.
		// Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 1, '2021-02-27T05:13:18Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Emperor''s New Groove, The', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.
		// In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.
		// Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 1, '2020-09-06T06:37:27Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('9/11', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.
		// Phasellus in felis. Donec semper sapien a libero. Nam dui.', 1, '2020-06-28T16:38:35Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Prime Suspect 3', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 1, '2020-07-02T14:12:47Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Blood on the Moon', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 1, '2021-02-02T00:59:35Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Dangerous Lives of Altar Boys, The', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 1, '2020-10-14T15:37:52Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Other Side of Midnight, The', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 1, '2020-04-26T14:50:02Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Smart Set, The', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 1, '2020-11-05T03:08:13Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Italianamerican', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 1, '2020-11-16T14:54:51Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Eddie Izzard: Circle', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.
		// Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 1, '2020-08-11T13:15:19Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Man in the Moon, The', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.
		// Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 1, '2020-10-02T04:53:53Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Best Man, The (Testimone dello sposo, Il)', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.
		// In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 1, '2021-02-05T07:22:19Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Boy and His Dog, A', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.
		// Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.
		// Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 1, '2020-09-08T11:31:56Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Lady Vanishes, The', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.
		// Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.
		// Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 1, '2020-06-09T01:25:29Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Black Hole, The', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.
		// Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.
		// In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 1, '2020-05-15T10:23:33Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Now or Never', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.
		// Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 1, '2020-08-13T11:41:24Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Fountainhead, The', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 1, '2020-12-28T17:36:08Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Merry Madagascar', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.
		// Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.
		// Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 1, '2020-09-20T16:57:31Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Flypaper', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 1, '2020-07-12T22:33:08Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Street Fighter, The (Gekitotsu! Satsujin ken)', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 1, '2020-05-26T10:04:18Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('For Heaven''s Sake', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', 1, '2021-01-18T16:33:24Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Clone (Womb)', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.
		// Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
		// Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 1, '2020-06-23T21:57:04Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('In Search of the Castaways', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.
		// Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.
		// Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 1, '2020-08-28T16:51:38Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Wit', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 1, '2020-05-05T21:09:45Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('The Cabin in the Cotton', 'In congue. Etiam justo. Etiam pretium iaculis justo.', 1, '2021-02-18T19:55:37Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Babylon 5', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.
		// In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.
		// Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 1, '2020-07-22T20:01:05Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Love Before Breakfast', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 1, '2021-03-21T10:17:43Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Young & Beautiful', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.
		// Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.
		// Sed ante. Vivamus tortor. Duis mattis egestas metus.', 1, '2020-04-21T20:03:35Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Marrying Kind, The', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 1, '2020-08-30T16:33:14Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Black Magic Rites & the Secret Orgies of the 14th Century (Riti, magie nere e segrete orge nel trecento...)', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.
		// Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 1, '2020-08-31T06:07:57Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Vesna va veloce', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.
		// Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 1, '2020-11-19T00:38:56Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Burnt by the Sun 2 (Utomlyonnye solntsem 2)', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.
		// Fusce consequat. Nulla nisl. Nunc nisl.', 1, '2020-11-28T14:43:10Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Tai Chi Hero', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.
		// Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 1, '2020-05-25T08:32:07Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Confessions of a Window Cleaner', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 1, '2021-03-22T03:20:50Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Twelve and Holding', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 1, '2020-04-27T10:44:50Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Demon Wind', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 1, '2021-01-02T06:47:32Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Dyatlov Pass Incident, The (Devil''s Pass)', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
		// Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.
		// Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 1, '2021-04-01T04:46:18Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('From Up on Poppy Hill (Kokuriko-zaka kara)', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 1, '2020-06-01T03:33:00Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Foreign Land (Terra Estrangeira)', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.
		// Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.
		// Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 1, '2020-08-17T00:56:33Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('''Til There Was You', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 1, '2020-08-09T21:38:36Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Some Folks Call It a Sling Blade', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.
		// Sed ante. Vivamus tortor. Duis mattis egestas metus.
		// Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 1, '2020-08-24T00:35:45Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Foreign Student', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.
		// Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.
		// Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 1, '2020-08-07T23:00:08Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Ryan''s Daughter', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 1, '2021-03-15T02:14:15Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Case Against 8, The', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.
		// Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.
		// Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 1, '2020-06-24T05:37:43Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Rebel Without a Cause', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.
		// Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.
		// Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 1, '2020-05-17T13:16:29Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Dark Shadows', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.
		// Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 1, '2020-05-10T23:10:34Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Wimbledon', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.
		// Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.
		// Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 1, '2020-09-27T07:00:02Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('Pope Joan (Die Päpstin)', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.
		// Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.
		// Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 1, '2020-12-25T17:26:13Z');
		// insert into post (title, text, "creatorId", "createdAt") values ('I Live My Life', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.
		// Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 1, '2020-05-22T05:22:23Z');
		// `);
	}

	public async down(_: QueryRunner): Promise<void> {}
}

// npx typeorm migration:create -n FakePosts

// use double quote "" around creatorId when creating mockdata because it uses a capital I and needs "" to compensate for that.
