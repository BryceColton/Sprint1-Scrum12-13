using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SCRUM_Backend.Migrations
{
    /// <inheritdoc />
    public partial class first : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "activities",
                columns: table => new
                {
                    activity_id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    title = table.Column<string>(type: "TEXT", nullable: false),
                    description = table.Column<string>(type: "TEXT", nullable: false),
                    category = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_activities", x => x.activity_id);
                });

            migrationBuilder.CreateTable(
                name: "users",
                columns: table => new
                {
                    user_id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    username = table.Column<string>(type: "TEXT", nullable: false),
                    first_name = table.Column<string>(type: "TEXT", nullable: false),
                    last_name = table.Column<string>(type: "TEXT", nullable: false),
                    password = table.Column<string>(type: "TEXT", nullable: false),
                    role = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_users", x => x.user_id);
                });

            migrationBuilder.CreateTable(
                name: "blog_posts",
                columns: table => new
                {
                    post_id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    user_id = table.Column<int>(type: "INTEGER", nullable: false),
                    activity_id = table.Column<int>(type: "INTEGER", nullable: false),
                    title = table.Column<string>(type: "TEXT", nullable: false),
                    content = table.Column<string>(type: "TEXT", nullable: false),
                    image_url = table.Column<string>(type: "TEXT", nullable: true),
                    created_at = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_blog_posts", x => x.post_id);
                    table.ForeignKey(
                        name: "FK_blog_posts_activities_activity_id",
                        column: x => x.activity_id,
                        principalTable: "activities",
                        principalColumn: "activity_id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_blog_posts_users_user_id",
                        column: x => x.user_id,
                        principalTable: "users",
                        principalColumn: "user_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "scheduled_activities",
                columns: table => new
                {
                    schedule_id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    activity_id = table.Column<int>(type: "INTEGER", nullable: false),
                    scheduled_by = table.Column<int>(type: "INTEGER", nullable: false),
                    scheduled_time = table.Column<DateTime>(type: "TEXT", nullable: false),
                    location = table.Column<string>(type: "TEXT", nullable: false),
                    user_id = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_scheduled_activities", x => x.schedule_id);
                    table.ForeignKey(
                        name: "FK_scheduled_activities_activities_activity_id",
                        column: x => x.activity_id,
                        principalTable: "activities",
                        principalColumn: "activity_id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_scheduled_activities_users_user_id",
                        column: x => x.user_id,
                        principalTable: "users",
                        principalColumn: "user_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "wards",
                columns: table => new
                {
                    ward_id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    ward_name = table.Column<string>(type: "TEXT", nullable: false),
                    leader_id = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_wards", x => x.ward_id);
                    table.ForeignKey(
                        name: "FK_wards_users_leader_id",
                        column: x => x.leader_id,
                        principalTable: "users",
                        principalColumn: "user_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "BlogLikes",
                columns: table => new
                {
                    like_id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    post_id = table.Column<int>(type: "INTEGER", nullable: false),
                    user_id = table.Column<int>(type: "INTEGER", nullable: false),
                    BlogPostPostId = table.Column<int>(type: "INTEGER", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BlogLikes", x => x.like_id);
                    table.ForeignKey(
                        name: "FK_BlogLikes_blog_posts_BlogPostPostId",
                        column: x => x.BlogPostPostId,
                        principalTable: "blog_posts",
                        principalColumn: "post_id");
                    table.ForeignKey(
                        name: "FK_BlogLikes_users_user_id",
                        column: x => x.user_id,
                        principalTable: "users",
                        principalColumn: "user_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_blog_posts_activity_id",
                table: "blog_posts",
                column: "activity_id");

            migrationBuilder.CreateIndex(
                name: "IX_blog_posts_user_id",
                table: "blog_posts",
                column: "user_id");

            migrationBuilder.CreateIndex(
                name: "IX_BlogLikes_BlogPostPostId",
                table: "BlogLikes",
                column: "BlogPostPostId");

            migrationBuilder.CreateIndex(
                name: "IX_BlogLikes_user_id",
                table: "BlogLikes",
                column: "user_id");

            migrationBuilder.CreateIndex(
                name: "IX_scheduled_activities_activity_id",
                table: "scheduled_activities",
                column: "activity_id");

            migrationBuilder.CreateIndex(
                name: "IX_scheduled_activities_user_id",
                table: "scheduled_activities",
                column: "user_id");

            migrationBuilder.CreateIndex(
                name: "IX_wards_leader_id",
                table: "wards",
                column: "leader_id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BlogLikes");

            migrationBuilder.DropTable(
                name: "scheduled_activities");

            migrationBuilder.DropTable(
                name: "wards");

            migrationBuilder.DropTable(
                name: "blog_posts");

            migrationBuilder.DropTable(
                name: "activities");

            migrationBuilder.DropTable(
                name: "users");
        }
    }
}
