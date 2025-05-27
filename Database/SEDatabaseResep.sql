create database bahan_makanan_SE
use bahan_makanan_SE

create table [User](
	UserID int identity(1,1) primary key,
	UserName varchar(255) not null,
	UserEmail varchar(50) not null,
	UserPassword varchar(50) not null,
	UserRole varchar(50) not null
)
insert into [User] values(
	'admin', 'admin@gmail.com', 'admin123', 'admin' 
)
create table BahanPokok(
	BahanID int primary key identity(1,1),
	NamaBahan varchar(255) not null,
	HargaBahan int not null,
	DateUp date,
	imageLink varchar(255) not null,
	UpdatedByAdmin int,
	constraint FK_UpdatedBy foreign key(UpdatedByAdmin) references [User](UserID)
)
ALTER TABLE BahanPokok
ALTER COLUMN imageLink VARCHAR(MAX) not null
create table CheckLists(
	UserID int,
	BahanID int,
	quantity int not null,
	CONSTRAINT PK_CheckLists PRIMARY KEY (UserID, BahanID),
	constraint FK_UserID foreign key(UserID) references [User](UserID),
	constraint FK_BahanID foreign key(BahanID) references [BahanPokok](BahanID),
)

create table Resep(
	ResepID int identity(1,1) primary key,
	ResepName varchar(255) not null,
	Deskripsi varchar(255) not null,
	Langkah varchar(255) not null,
	images varchar(255) not null
)

create table ResepBahan(
	
	ResepID int,
	BahanID int,
	quantity int,
	CONSTRAINT PK_ResepBahan PRIMARY KEY (ResepID, BahanID),
	constraint FK_ResepID foreign key(ResepID) references Resep(ResepID),
	constraint FK_BahanResepID foreign key(BahanID) references [BahanPokok](BahanID),
	
)

insert into BahanPokok(NamaBahan, HargaBahan, DateUp, imageLink) values
	('Beras Premium', 15000, CAST(GETDATE() AS DATE), 'https://png.pngtree.com/background/20230424/original/pngtree-two-baskets-filled-with-rice-on-the-grass-picture-image_2457613.jpg' ),
	('Beras Medium', 12800, CAST(GETDATE() AS DATE), 'https://png.pngtree.com/background/20230424/original/pngtree-two-baskets-filled-with-rice-on-the-grass-picture-image_2457613.jpg' ),
	('Daging Sapi', 135000, CAST(GETDATE() AS DATE), 'https://www.maggi.id/sites/default/files/inline-images/shutterstock_294503564.jpg' ),
	('Daging Ayam Ras', 38000, CAST(GETDATE() AS DATE), 'https://images.search.yahoo.com/images/view;_ylt=Awr9.i9X6TVocB8azAeJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzk0Zjg4ZDI3OGQ0NmI2NjdlYjcxYTNhOTRiZTZiZGZiBGdwb3MDMTIEaXQDYmluZw--?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Ddaging%2Bayam%2Bfoto%26ei%3DUTF-8%26type%3DE210US0G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D12&w=900&h=672&imgurl=www.ibudanbalita.com%2Fuploads%2Fposts%2FFuw5hsaTnG.jpg&rurl=https%3A%2F%2Fhomecare24.id%2Fprotein-daging-ayam%2F&size=73KB&p=daging+ayam+foto&oid=94f88d278d46b667eb71a3a94be6bdfb&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=Protein+Daging+Ayam+-+Homecare24&b=0&ni=200&no=12&ts=&tab=organic&sigr=i4R6UaHHprKQ&sigb=40lRByaNnfoX&sigi=5RS7w.x7k_xR&sigt=MjH_DbZhtp5g&.crumb=vzoWqp5TZba&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E210US0G0' ),
	('Telur Ayam Ras', 30000, CAST(GETDATE() AS DATE), 'https://images.search.yahoo.com/images/view;_ylt=Awr98eN96TVoshkCfHaJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzJhMjIwNzI4YWI0NWM1MjNhMWQzYjZkMjE5MDAzZWRkBGdwb3MDNQRpdANiaW5n?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dtelur%2Bayam%2Bfoto%26ei%3DUTF-8%26type%3DE210US0G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D5&w=2507&h=1673&imgurl=s0.bukalapak.com%2Fbukalapak-kontenz-production%2Fcontent_attachments%2F86880%2Foriginal%2Fjenis_telur_main_image.jpg&rurl=https%3A%2F%2Fmitra.bukalapak.com%2Fartikel%2Fjenis-telur-118874&size=475KB&p=telur+ayam+foto&oid=2a220728ab45c523a1d3b6d219003edd&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=7+Jenis+Telur+Ayam+yang+Ada+di+Pasaran+dan+Cara+Memilihnya&b=0&ni=200&no=5&ts=&tab=organic&sigr=lufmQErED6pj&sigb=0VmnEoCIbGNI&sigi=yqzGKOFZMF0F&sigt=pJW1nuQk3pe.&.crumb=vzoWqp5TZba&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E210US0G0' ),
	('Cabai Merah Keriting', 72000, CAST(GETDATE() AS DATE), 'https://s1.bukalapak.com/attachment/668332/jenis-jenis_cabe_main_image.jpg' ),
	('Cabai Rawit Merah', 85000, CAST(GETDATE() AS DATE), 'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1565058634/yodnjmrrdcfb9nmielwm.jpg' ),
	('Bawang Merah', 32000, CAST(GETDATE() AS DATE), 'https://images.search.yahoo.com/images/view;_ylt=AwrO_SkN6jVofskVvNeJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2FmY2I5ODkxZjQwMGUxM2Q0ODU2OTAyMjUxZTUxMzdlBGdwb3MDNQRpdANiaW5n?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dbawang%2Bmerah%2Bfoto%26ei%3DUTF-8%26type%3DE210US0G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D5&w=1200&h=800&imgurl=berkeluarga.id%2Fmedia%2F2020%2F10%2F01-stockking-5655.jpg&rurl=https%3A%2F%2Fwww.perumperindo.co.id%2Fmanfaat-bawang-merah-untuk-kesehatan%2F&size=450KB&p=bawang+merah+foto&oid=afcb9891f400e13d4856902251e5137e&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=Manfaat+Bawang+Merah+Untuk+Kesehatan+-+Perumperindo.co.id&b=0&ni=200&no=5&ts=&tab=organic&sigr=wz1fBH7Rdfy_&sigb=SkYHxH2rv2Y3&sigi=QIEBXJFfFqoV&sigt=CDg._P0KR7Re&.crumb=vzoWqp5TZba&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E210US0G0' ),
	('Bawang Putih', 34000, CAST(GETDATE() AS DATE), 'https://tse2.mm.bing.net/th?id=OIP.cm__DhR1XL1GpQv0jdofCgHaE8&pid=Api&P=0&h=220' ),
	('Minyak Goreng Kemasan', 20000, CAST(GETDATE() AS DATE), 'https://3.bp.blogspot.com/-Dun1-VXWTDM/WyCAenKP4YI/AAAAAAAAF2o/wel6TvQ2jU4DHzQMIjB58cxvGRiopuZaQCLcBGAs/s1600/jasa-desain-kemasan-packaging-produk-minyak-goreng-kelapa-sawit-mie-frozenfood-ukm-minyak-goreng-bumbu-makanan-kue-roti-madu-gula-kopi-kosmetik-surabaya-sidoarjo-malang-jakarta-bekasi-jambi-gresik.JPG' ),
	('Minyak Goreng Curah', 16000, CAST(GETDATE() AS DATE), 'https://images.search.yahoo.com/images/view;_ylt=Awr9.i9y6jVo5iEapA2JzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2YyZGUxNjg1NGE3ZmM1NmM3NGQ2OGQxNTBmNDI2N2ViBGdwb3MDNDkEaXQDYmluZw--?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dminyak%2Bgoreng%2Bcurah%2Bfoto%26ei%3DUTF-8%26type%3DE210US0G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D49&w=1050&h=700&imgurl=sukoharjonews.com%2Fwp-content%2Fuploads%2F2022%2F04%2F27-minyak-goreng-setkab.jpg&rurl=https%3A%2F%2Fsukoharjonews.com%2Fmodus-penipuan-minyak-goreng-curah-dikemas-premium-kerugain-capai-rp266-miliar%2F&size=50KB&p=minyak+goreng+curah+foto&oid=f2de16854a7fc56c74d68d150f4267eb&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=Modus+Penipuan%2C+Minyak+Goreng+Curah+Dikemas+Premium%2C+Kerugain+Capai+Rp26%2C6+Miliar+...&b=0&ni=200&no=49&ts=&tab=organic&sigr=mxKRTPWCigGa&sigb=SdjCSgUEddrT&sigi=ztI3l_bEaue.&sigt=.CEK8_HyQvPc&.crumb=vzoWqp5TZba&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E210US0G0' ),
	('Gula Pasir', 17500, CAST(GETDATE() AS DATE), 'https://images.search.yahoo.com/images/view;_ylt=AwrO6TSi6jVoi_kWxZeJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzU4NzAyYWJmZDdjYjNlYjE4ZWY1MThkOTc5OWYyMTBiBGdwb3MDNwRpdANiaW5n?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dgula%2Bpasir%2Bfoto%26ei%3DUTF-8%26type%3DE210US0G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D7&w=850&h=563&imgurl=realestat.id%2Fwp-content%2Fuploads%2F2020%2F08%2FMembersihkan-peralatan-dapur-dengan-gula-RealEstat.id-istimewa.jpg&rurl=https%3A%2F%2Frealestat.id%2Fberita-properti%2Fini-dia-trik-hilangkan-noda-perabot-rumah-dengan-gula-pasir%2F&size=167KB&p=gula+pasir+foto&oid=58702abfd7cb3eb18ef518d9799f210b&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=Ini+Dia+Trik+Hilangkan+Noda+Perabot+Rumah+dengan+Gula+Pasir+-+RealEstat.id&b=0&ni=200&no=7&ts=&tab=organic&sigr=eORvKC5NT8KB&sigb=TF2RlutZZCpZ&sigi=UwOSbLL6o88e&sigt=Dq5.VrWd2wCR&.crumb=vzoWqp5TZba&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E210US0G0' ),
	('Kedelai Biji Kering', 13000, CAST(GETDATE() AS DATE), 'https://images.search.yahoo.com/images/view;_ylt=Awr90o246jVoPpQV0daJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2IyNzNkNDY4ZjM4NWVmMmY2NTcwNzJkN2U3OWQ0NTA2BGdwb3MDMjkEaXQDYmluZw--?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dkedelai%2Bbiji%2Bkeriting%2Bfoto%26ei%3DUTF-8%26type%3DE210US0G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D29&w=550&h=372&imgurl=umsu.ac.id%2Fwp-content%2Fuploads%2F2021%2F11%2Fkedelai-untuk-kecantikan-freepik.jpg&rurl=https%3A%2F%2Fumsu.ac.id%2Fkedelai-untuk-kecantikan%2F&size=53KB&p=kedelai+biji+keriting+foto&oid=b273d468f385ef2f657072d7e79d4506&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=Kedelai+Untuk+Kecantikan+-+Kampus+Terbaik+di+Medan+Sumatera+Utara&b=0&ni=200&no=29&ts=&tab=organic&sigr=HHVdAswx23Tq&sigb=vPzwXh77DO7U&sigi=ITSTRW3S6Qz9&sigt=7x6apRhIFufb&.crumb=vzoWqp5TZba&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E210US0G0' ),
	('Tepung Terigu', 12000, CAST(GETDATE() AS DATE), 'https://images.search.yahoo.com/images/view;_ylt=AwrO6TQv6zVojWgVRh6JzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzU1MTE5ZmQ2OWMwM2Y4Yjk1ZTlmYTAxMTBmZmUyZWU4BGdwb3MDNARpdANiaW5n?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dtepung%2Bterigu%2Bfoto%26ei%3DUTF-8%26type%3DE210US0G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D4&w=640&h=360&imgurl=blue.kumparan.com%2Fimage%2Fupload%2Ffl_progressive%2Cfl_lossy%2Cc_fill%2Cq_auto%3Abest%2Cw_640%2Fv1499664021%2Faydhuh78mmmlnxiwuj3x.jpg&rurl=https%3A%2F%2Fkumparan.com%2Fkumparanfood%2Fmengenal-tiga-jenis-tepung-terigu-dan-kegunaannya&size=65KB&p=tepung+terigu+foto&oid=55119fd69c03f8b95e9fa0110ffe2ee8&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=Mengenal+Tiga+Jenis+Tepung+Terigu+dan+Kegunaannya+%7C+kumparan.com&b=0&ni=200&no=4&ts=&tab=organic&sigr=qyDPHaByjFrX&sigb=A_8g9z5gPDQM&sigi=eGah5qOskaKC&sigt=mUhCl4P5XD5s&.crumb=vzoWqp5TZba&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E210US0G0' ),
	('Jagung Pipilan Kering', 8500, CAST(GETDATE() AS DATE), 'https://images.search.yahoo.com/images/view;_ylt=Awr98eNV6zVoUhgEP5eJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2Q3YjVjMzYwZTg1MDAzNmJmNmM0ZDhhOWRmN2M1ZDdlBGdwb3MDNzUEaXQDYmluZw--?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Djagung%2Bpipilan%2Bkering%2Bfoto%26ei%3DUTF-8%26type%3DE210US0G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26nost%3D1%26tab%3Dorganic%26ri%3D75&w=750&h=500&imgurl=asset.kompas.com%2Fcrops%2FUy7N-bLyFeFQ30znDp11NzvFRf0%3D%2F4x0%3A1000x664%2F750x500%2Fdata%2Fphoto%2F2021%2F10%2F05%2F615ba79b86492.jpg&rurl=https%3A%2F%2Fwww.kompas.com%2Ffood%2Fread%2F2021%2F10%2F06%2F160700875%2Fjenis-jagung-untuk-bikin-popcorn-hanya-ada-satu-di-indonesia&size=85KB&p=jagung+pipilan+kering+foto&oid=d7b5c360e850036bf6c4d8a9df7c5d7e&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=Jenis+Jagung+untuk+Bikin+Popcorn%2C+Hanya+Ada+Satu+di+Indonesia&b=61&ni=200&no=75&ts=&tab=organic&sigr=MSJTHGRUbntj&sigb=m6PTHDFZQ.Jr&sigi=2CYvL49Mvxys&sigt=mU.S1r7ngiXt&.crumb=vzoWqp5TZba&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E210US0G0' )
