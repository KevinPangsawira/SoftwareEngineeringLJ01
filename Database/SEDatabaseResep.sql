USE [master]
GO
/****** Object:  Database [bahan_makanan_SE]    Script Date: 6/1/2025 11:42:28 PM ******/
CREATE DATABASE [bahan_makanan_SE]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'bahan_makanan_SE', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\bahan_makanan_SE.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'bahan_makanan_SE_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\bahan_makanan_SE_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [bahan_makanan_SE] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [bahan_makanan_SE].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [bahan_makanan_SE] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [bahan_makanan_SE] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [bahan_makanan_SE] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [bahan_makanan_SE] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [bahan_makanan_SE] SET ARITHABORT OFF 
GO
ALTER DATABASE [bahan_makanan_SE] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [bahan_makanan_SE] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [bahan_makanan_SE] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [bahan_makanan_SE] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [bahan_makanan_SE] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [bahan_makanan_SE] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [bahan_makanan_SE] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [bahan_makanan_SE] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [bahan_makanan_SE] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [bahan_makanan_SE] SET  ENABLE_BROKER 
GO
ALTER DATABASE [bahan_makanan_SE] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [bahan_makanan_SE] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [bahan_makanan_SE] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [bahan_makanan_SE] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [bahan_makanan_SE] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [bahan_makanan_SE] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [bahan_makanan_SE] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [bahan_makanan_SE] SET RECOVERY FULL 
GO
ALTER DATABASE [bahan_makanan_SE] SET  MULTI_USER 
GO
ALTER DATABASE [bahan_makanan_SE] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [bahan_makanan_SE] SET DB_CHAINING OFF 
GO
ALTER DATABASE [bahan_makanan_SE] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [bahan_makanan_SE] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [bahan_makanan_SE] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [bahan_makanan_SE] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'bahan_makanan_SE', N'ON'
GO
ALTER DATABASE [bahan_makanan_SE] SET QUERY_STORE = ON
GO
ALTER DATABASE [bahan_makanan_SE] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [bahan_makanan_SE]
GO
/****** Object:  User [user321]    Script Date: 6/1/2025 11:42:29 PM ******/
CREATE USER [user321] FOR LOGIN [user321] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_datareader] ADD MEMBER [user321]
GO
ALTER ROLE [db_datawriter] ADD MEMBER [user321]
GO
/****** Object:  Table [dbo].[BahanPokok]    Script Date: 6/1/2025 11:42:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BahanPokok](
	[BahanID] [int] IDENTITY(1,1) NOT NULL,
	[NamaBahan] [varchar](255) NOT NULL,
	[HargaBahan] [int] NOT NULL,
	[DateUp] [date] NULL,
	[imageLink] [varchar](max) NOT NULL,
	[UpdatedByAdmin] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[BahanID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CheckLists]    Script Date: 6/1/2025 11:42:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CheckLists](
	[UserID] [int] NOT NULL,
	[BahanID] [int] NOT NULL,
	[quantity] [int] NOT NULL,
 CONSTRAINT [PK_CheckLists] PRIMARY KEY CLUSTERED 
(
	[UserID] ASC,
	[BahanID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Resep]    Script Date: 6/1/2025 11:42:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Resep](
	[ResepID] [int] IDENTITY(1,1) NOT NULL,
	[ResepName] [varchar](255) NOT NULL,
	[Deskripsi] [varchar](255) NOT NULL,
	[Langkah] [varchar](255) NOT NULL,
	[images] [varchar](max) NOT NULL,
	[TotalHarga] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[ResepID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ResepBahan]    Script Date: 6/1/2025 11:42:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ResepBahan](
	[ResepID] [int] NOT NULL,
	[BahanID] [int] NOT NULL,
	[quantity] [int] NULL,
 CONSTRAINT [PK_ResepBahan] PRIMARY KEY CLUSTERED 
(
	[ResepID] ASC,
	[BahanID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User]    Script Date: 6/1/2025 11:42:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[UserID] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [varchar](255) NOT NULL,
	[UserEmail] [varchar](50) NOT NULL,
	[UserPassword] [varchar](50) NOT NULL,
	[UserRole] [varchar](50) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[UserID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[BahanPokok] ON 

INSERT [dbo].[BahanPokok] ([BahanID], [NamaBahan], [HargaBahan], [DateUp], [imageLink], [UpdatedByAdmin]) VALUES (1, N'Beras Premium', 15000, CAST(N'2025-05-31' AS Date), N'https://png.pngtree.com/background/20230424/original/pngtree-two-baskets-filled-with-rice-on-the-grass-picture-image_2457613.jpg', NULL)
INSERT [dbo].[BahanPokok] ([BahanID], [NamaBahan], [HargaBahan], [DateUp], [imageLink], [UpdatedByAdmin]) VALUES (2, N'Beras Medium', 12800, CAST(N'2025-05-31' AS Date), N'https://tse2.mm.bing.net/th?id=OIP.sfFS9gGK63Vz7pqLwQLrvAHaD4&pid=Api&P=0&h=220', NULL)
INSERT [dbo].[BahanPokok] ([BahanID], [NamaBahan], [HargaBahan], [DateUp], [imageLink], [UpdatedByAdmin]) VALUES (3, N'Daging Sapi', 135000, CAST(N'2025-05-31' AS Date), N'https://www.maggi.id/sites/default/files/inline-images/shutterstock_294503564.jpg', NULL)
INSERT [dbo].[BahanPokok] ([BahanID], [NamaBahan], [HargaBahan], [DateUp], [imageLink], [UpdatedByAdmin]) VALUES (4, N'Daging Ayam Ras', 38000, CAST(N'2025-05-31' AS Date), N'https://kirim-ayam.com/wp-content/uploads/2020/10/Pentingnya-Daging-Ayam-Broiler-Segar-dan-Berkualitas-600x344.jpg', NULL)
INSERT [dbo].[BahanPokok] ([BahanID], [NamaBahan], [HargaBahan], [DateUp], [imageLink], [UpdatedByAdmin]) VALUES (5, N'Telur Ayam Ras', 30000, CAST(N'2025-05-31' AS Date), N'https://tse3.mm.bing.net/th?id=OIP.yv9M7coIy7iNsgbzX4-sWwHaE8&pid=Api&P=0&h=220', NULL)
INSERT [dbo].[BahanPokok] ([BahanID], [NamaBahan], [HargaBahan], [DateUp], [imageLink], [UpdatedByAdmin]) VALUES (6, N'Cabai Merah Keriting', 72000, CAST(N'2025-05-31' AS Date), N'https://s1.bukalapak.com/attachment/668332/jenis-jenis_cabe_main_image.jpg', NULL)
INSERT [dbo].[BahanPokok] ([BahanID], [NamaBahan], [HargaBahan], [DateUp], [imageLink], [UpdatedByAdmin]) VALUES (7, N'Cabai Rawit Merah', 85000, CAST(N'2025-05-31' AS Date), N'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1565058634/yodnjmrrdcfb9nmielwm.jpg', NULL)
INSERT [dbo].[BahanPokok] ([BahanID], [NamaBahan], [HargaBahan], [DateUp], [imageLink], [UpdatedByAdmin]) VALUES (8, N'Bawang Merah', 32000, CAST(N'2025-05-31' AS Date), N'https://www.astronauts.id/blog/wp-content/uploads/2023/01/Manfaat-Bawang-Untuk-Kesehatan.jpg', NULL)
INSERT [dbo].[BahanPokok] ([BahanID], [NamaBahan], [HargaBahan], [DateUp], [imageLink], [UpdatedByAdmin]) VALUES (9, N'Bawang Putih', 34000, CAST(N'2025-05-31' AS Date), N'https://tse2.mm.bing.net/th?id=OIP.cm__DhR1XL1GpQv0jdofCgHaE8&pid=Api&P=0&h=220', NULL)
INSERT [dbo].[BahanPokok] ([BahanID], [NamaBahan], [HargaBahan], [DateUp], [imageLink], [UpdatedByAdmin]) VALUES (10, N'Minyak Goreng Kemasan', 20000, CAST(N'2025-05-31' AS Date), N'https://tse1.mm.bing.net/th?id=OIP.GmJc34nGwxtnaxbCEhohSQHaE8&pid=Api&P=0&h=220', NULL)
INSERT [dbo].[BahanPokok] ([BahanID], [NamaBahan], [HargaBahan], [DateUp], [imageLink], [UpdatedByAdmin]) VALUES (11, N'Minyak Goreng Curah', 16000, CAST(N'2025-05-31' AS Date), N'https://sukoharjonews.com/wp-content/uploads/2022/04/27-minyak-goreng-setkab.jpg', NULL)
INSERT [dbo].[BahanPokok] ([BahanID], [NamaBahan], [HargaBahan], [DateUp], [imageLink], [UpdatedByAdmin]) VALUES (12, N'Gula Pasir', 17500, CAST(N'2025-05-31' AS Date), N'https://4.bp.blogspot.com/-9iw-WgM_gMw/WOIRD-Qr_JI/AAAAAAAAAUE/iL2eJZH5vNQbtmCrrIeXSYh2twVkMidzACLcB/s1600/gula_pasir.jpg', NULL)
INSERT [dbo].[BahanPokok] ([BahanID], [NamaBahan], [HargaBahan], [DateUp], [imageLink], [UpdatedByAdmin]) VALUES (13, N'Kedelai Biji Kering', 13000, CAST(N'2025-05-31' AS Date), N'https://tse2.mm.bing.net/th?id=OIP.lDhBs6Qd541O01CpEEWJJwHaE8&pid=Api&P=0&h=220', NULL)
INSERT [dbo].[BahanPokok] ([BahanID], [NamaBahan], [HargaBahan], [DateUp], [imageLink], [UpdatedByAdmin]) VALUES (14, N'Tepung Terigu', 12000, CAST(N'2025-05-31' AS Date), N'https://tse4.mm.bing.net/th?id=OIP.h_rZhUj7jGQekql7gat9ZQHaE8&pid=Api&P=0&h=220', NULL)
INSERT [dbo].[BahanPokok] ([BahanID], [NamaBahan], [HargaBahan], [DateUp], [imageLink], [UpdatedByAdmin]) VALUES (15, N'Jagung Pipilan Kering', 8500, CAST(N'2025-05-31' AS Date), N'http://grosirmesin.com/wp-content/uploads/2022/06/jenis-jagung.jpg', NULL)
SET IDENTITY_INSERT [dbo].[BahanPokok] OFF
GO
SET IDENTITY_INSERT [dbo].[Resep] ON 

INSERT [dbo].[Resep] ([ResepID], [ResepName], [Deskripsi], [Langkah], [images], [TotalHarga]) VALUES (1, N'Nasi Goreng Ayam', N'Nasi goreng dengan ayam dan bumbu sederhana.', N'1. Tumis bawang putih\n2. Masukkan ayam, telur dan nasi\n3. Aduk hingga matang', N'https://asset.kompas.com/crops/dMmgPIjxYv0Wd1bVKIgxTu9IEPE=/4x0:1000x664/1200x800/data/photo/2022/05/04/627208b727a09.jpg', 25000)
INSERT [dbo].[Resep] ([ResepID], [ResepName], [Deskripsi], [Langkah], [images], [TotalHarga]) VALUES (2, N'Telur Dadar', N'Masakan sederhana menggunakan telur dan bawang.', N'1. Kocok telur\n2. Tambahkan bawang\n3. Goreng dengan minyak', N'https://asset.kompas.com/crops/_z4ztQmYz0uunr3tPX1o_dlQGmI=/6x17:974x663/1200x800/data/photo/2023/08/18/64dec7f2c27da.jpg', 10000)
INSERT [dbo].[Resep] ([ResepID], [ResepName], [Deskripsi], [Langkah], [images], [TotalHarga]) VALUES (3, N'Sate Daging Sapi', N'Sate daging sapi sederhana.', N'1. Potong daging sapi kecil-kecil\n2. Tusuk ke tusuk sate\n3. Bakar hingga matang\n4. Sajikan dengan bawang merah dan cabai rawit merah', N'https://asset.kompas.com/crops/-A2hEf0v0sxHPItq5lVR7j30K7c=/95x0:939x563/1200x800/data/photo/2022/07/10/62ca309364500.jpeg', 25000)
INSERT [dbo].[Resep] ([ResepID], [ResepName], [Deskripsi], [Langkah], [images], [TotalHarga]) VALUES (4, N'Jagung Rebus', N'Jagung pipilan cocok untuk cemilan sehat.', N'1. Cuci jagung pipilan\n2. Rebus hingga empuk', N'https://cdn.grid.id/crop/0x0:0x0/700x0/photo/2022/12/05/cara-merebus-jagung-supaya-empuk-20221205105315.jpg', 4000)
INSERT [dbo].[Resep] ([ResepID], [ResepName], [Deskripsi], [Langkah], [images], [TotalHarga]) VALUES (5, N'Sup Kedelai Bawang', N'Sup sederhana dari kedelai dan bawang merah.', N'1. Rebus kedelai hingga empuk\n2. Tumis bawang merah\n3. Campur kedelai dengan bawang merah dan air\n4. Masak hingga mendidih', N'https://www.kacangkedelai.com/wp-content/uploads/2012/05/sup-kacang-kedelai.jpg', 7000)
INSERT [dbo].[Resep] ([ResepID], [ResepName], [Deskripsi], [Langkah], [images], [TotalHarga]) VALUES (6, N'Tumis Jagung Cabai', N'Tumis pedas dari jagung pipilan dan cabai merah keriting.', N'1. Tumis bawang\n2. Masukkan jagung dan cabai\n3. Tambahkan sedikit air dan masak hingga matang', N'https://asset.kompas.com/crops/HOU0EJRzA53mdMMTmuZYbzLUqYM=/0x193:1000x860/1200x800/data/photo/2022/07/24/62dd5b577488f.jpg', 8000)
INSERT [dbo].[Resep] ([ResepID], [ResepName], [Deskripsi], [Langkah], [images], [TotalHarga]) VALUES (7, N'Kue Cubit', N'Kue tradisional dari tepung terigu dan gula pasir.', N'1. Campur tepung terigu, telur, gula pasir, dan air\n2. Tuang ke cetakan kue\n3. Panggang hingga matang', N'https://asset.kompas.com/crops/5aFhs-7ESXr8B1dv1h_q8twYM0Y=/17x0:686x446/1200x800/data/photo/2021/07/31/6104b4dfb99c9.jpg', 9000)
INSERT [dbo].[Resep] ([ResepID], [ResepName], [Deskripsi], [Langkah], [images], [TotalHarga]) VALUES (8, N'Nasi Ayam Penyet', N'Ayam goreng dengan sambal penyet.', N'1. Goreng ayam hingga kecoklatan\n2. Haluskan cabai, bawang merah, dan bawang putih dan masak hingga wangi\n3. Sajikan dengan nasi', N'https://img-global.cpcdn.com/recipes/16f513380eb5fa66/1200x630cq70/photo.jpg', 15000)
INSERT [dbo].[Resep] ([ResepID], [ResepName], [Deskripsi], [Langkah], [images], [TotalHarga]) VALUES (9, N'Kacang Goreng', N'Cemilan sehat dari kacang kedelai.', N'1. Cuci kacang kedelai\n2. Goreng hingga kecoklatan', N'https://img-global.cpcdn.com/recipes/8e5ea778485b0df3/400x400cq70/photo.jpg', 5000)
INSERT [dbo].[Resep] ([ResepID], [ResepName], [Deskripsi], [Langkah], [images], [TotalHarga]) VALUES (10, N'Keripik Jagung', N'Cemilan renyah dari jagung pipilan.', N'1. Cuci jagung pipilan\n2. Goreng hingga kering dan renyah', N'https://down-id.img.susercontent.com/file/7034c0d6954480f03d3f5c17a66e6adf', 6000)
SET IDENTITY_INSERT [dbo].[Resep] OFF
GO
INSERT [dbo].[ResepBahan] ([ResepID], [BahanID], [quantity]) VALUES (1, 1, 1)
INSERT [dbo].[ResepBahan] ([ResepID], [BahanID], [quantity]) VALUES (1, 4, 1)
INSERT [dbo].[ResepBahan] ([ResepID], [BahanID], [quantity]) VALUES (1, 5, 1)
INSERT [dbo].[ResepBahan] ([ResepID], [BahanID], [quantity]) VALUES (1, 9, 1)
INSERT [dbo].[ResepBahan] ([ResepID], [BahanID], [quantity]) VALUES (1, 10, 1)
INSERT [dbo].[ResepBahan] ([ResepID], [BahanID], [quantity]) VALUES (2, 4, 2)
INSERT [dbo].[ResepBahan] ([ResepID], [BahanID], [quantity]) VALUES (2, 8, 1)
INSERT [dbo].[ResepBahan] ([ResepID], [BahanID], [quantity]) VALUES (2, 10, 1)
INSERT [dbo].[ResepBahan] ([ResepID], [BahanID], [quantity]) VALUES (3, 3, 1)
INSERT [dbo].[ResepBahan] ([ResepID], [BahanID], [quantity]) VALUES (3, 7, 1)
INSERT [dbo].[ResepBahan] ([ResepID], [BahanID], [quantity]) VALUES (3, 8, 1)
INSERT [dbo].[ResepBahan] ([ResepID], [BahanID], [quantity]) VALUES (3, 10, 1)
INSERT [dbo].[ResepBahan] ([ResepID], [BahanID], [quantity]) VALUES (4, 15, 1)
INSERT [dbo].[ResepBahan] ([ResepID], [BahanID], [quantity]) VALUES (5, 8, 1)
INSERT [dbo].[ResepBahan] ([ResepID], [BahanID], [quantity]) VALUES (5, 13, 1)
INSERT [dbo].[ResepBahan] ([ResepID], [BahanID], [quantity]) VALUES (6, 6, 1)
INSERT [dbo].[ResepBahan] ([ResepID], [BahanID], [quantity]) VALUES (6, 8, 1)
INSERT [dbo].[ResepBahan] ([ResepID], [BahanID], [quantity]) VALUES (6, 10, 1)
INSERT [dbo].[ResepBahan] ([ResepID], [BahanID], [quantity]) VALUES (6, 15, 1)
INSERT [dbo].[ResepBahan] ([ResepID], [BahanID], [quantity]) VALUES (7, 5, 1)
INSERT [dbo].[ResepBahan] ([ResepID], [BahanID], [quantity]) VALUES (7, 10, 1)
INSERT [dbo].[ResepBahan] ([ResepID], [BahanID], [quantity]) VALUES (7, 12, 1)
INSERT [dbo].[ResepBahan] ([ResepID], [BahanID], [quantity]) VALUES (7, 14, 1)
INSERT [dbo].[ResepBahan] ([ResepID], [BahanID], [quantity]) VALUES (8, 1, 1)
INSERT [dbo].[ResepBahan] ([ResepID], [BahanID], [quantity]) VALUES (8, 4, 1)
INSERT [dbo].[ResepBahan] ([ResepID], [BahanID], [quantity]) VALUES (8, 6, 1)
INSERT [dbo].[ResepBahan] ([ResepID], [BahanID], [quantity]) VALUES (8, 7, 1)
INSERT [dbo].[ResepBahan] ([ResepID], [BahanID], [quantity]) VALUES (8, 8, 1)
INSERT [dbo].[ResepBahan] ([ResepID], [BahanID], [quantity]) VALUES (8, 9, 1)
INSERT [dbo].[ResepBahan] ([ResepID], [BahanID], [quantity]) VALUES (8, 10, 1)
INSERT [dbo].[ResepBahan] ([ResepID], [BahanID], [quantity]) VALUES (9, 10, 1)
INSERT [dbo].[ResepBahan] ([ResepID], [BahanID], [quantity]) VALUES (9, 13, 1)
INSERT [dbo].[ResepBahan] ([ResepID], [BahanID], [quantity]) VALUES (10, 10, 1)
INSERT [dbo].[ResepBahan] ([ResepID], [BahanID], [quantity]) VALUES (10, 15, 1)
GO
SET IDENTITY_INSERT [dbo].[User] ON 

INSERT [dbo].[User] ([UserID], [UserName], [UserEmail], [UserPassword], [UserRole]) VALUES (1, N'admin', N'admin@gmail.com', N'admin123', N'admin')
INSERT [dbo].[User] ([UserID], [UserName], [UserEmail], [UserPassword], [UserRole]) VALUES (2, N'Kevin', N'kevin@gmail.com', N'kevin123', N'Customer')
SET IDENTITY_INSERT [dbo].[User] OFF
GO
ALTER TABLE [dbo].[BahanPokok]  WITH CHECK ADD  CONSTRAINT [FK_UpdatedBy] FOREIGN KEY([UpdatedByAdmin])
REFERENCES [dbo].[User] ([UserID])
GO
ALTER TABLE [dbo].[BahanPokok] CHECK CONSTRAINT [FK_UpdatedBy]
GO
ALTER TABLE [dbo].[CheckLists]  WITH CHECK ADD  CONSTRAINT [FK_BahanID] FOREIGN KEY([BahanID])
REFERENCES [dbo].[BahanPokok] ([BahanID])
GO
ALTER TABLE [dbo].[CheckLists] CHECK CONSTRAINT [FK_BahanID]
GO
ALTER TABLE [dbo].[CheckLists]  WITH CHECK ADD  CONSTRAINT [FK_UserID] FOREIGN KEY([UserID])
REFERENCES [dbo].[User] ([UserID])
GO
ALTER TABLE [dbo].[CheckLists] CHECK CONSTRAINT [FK_UserID]
GO
ALTER TABLE [dbo].[ResepBahan]  WITH CHECK ADD  CONSTRAINT [FK_BahanResepID] FOREIGN KEY([BahanID])
REFERENCES [dbo].[BahanPokok] ([BahanID])
GO
ALTER TABLE [dbo].[ResepBahan] CHECK CONSTRAINT [FK_BahanResepID]
GO
ALTER TABLE [dbo].[ResepBahan]  WITH CHECK ADD  CONSTRAINT [FK_ResepID] FOREIGN KEY([ResepID])
REFERENCES [dbo].[Resep] ([ResepID])
GO
ALTER TABLE [dbo].[ResepBahan] CHECK CONSTRAINT [FK_ResepID]
GO
USE [master]
GO
ALTER DATABASE [bahan_makanan_SE] SET  READ_WRITE 
GO
