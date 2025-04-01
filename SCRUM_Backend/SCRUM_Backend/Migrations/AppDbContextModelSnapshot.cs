﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SCRUM_Backend.Data;

#nullable disable

namespace SCRUM_Backend.Migrations
{
    [DbContext(typeof(AppDbContext))]
    partial class AppDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "8.0.13");

            modelBuilder.Entity("BlogLike", b =>
                {
                    b.Property<int>("LikeId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER")
                        .HasColumnName("like_id");

                    b.Property<int?>("BlogPostPostId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("PostId")
                        .HasColumnType("INTEGER")
                        .HasColumnName("post_id");

                    b.Property<int>("UserId")
                        .HasColumnType("INTEGER")
                        .HasColumnName("user_id");

                    b.HasKey("LikeId");

                    b.HasIndex("BlogPostPostId");

                    b.HasIndex("UserId");

                    b.ToTable("BlogLikes");
                });

            modelBuilder.Entity("SCRUM_Backend.Models.Activity", b =>
                {
                    b.Property<int>("ActivityId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER")
                        .HasColumnName("activity_id");

                    b.Property<string>("Category")
                        .IsRequired()
                        .HasColumnType("TEXT")
                        .HasColumnName("category");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("TEXT")
                        .HasColumnName("description");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("TEXT")
                        .HasColumnName("title");

                    b.HasKey("ActivityId");

                    b.ToTable("activities");
                });

            modelBuilder.Entity("SCRUM_Backend.Models.BlogPost", b =>
                {
                    b.Property<int>("PostId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER")
                        .HasColumnName("post_id");

                    b.Property<int>("ActivityId")
                        .HasColumnType("INTEGER")
                        .HasColumnName("activity_id");

                    b.Property<string>("Content")
                        .IsRequired()
                        .HasColumnType("TEXT")
                        .HasColumnName("content");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("TEXT")
                        .HasColumnName("created_at");

                    b.Property<string>("ImageUrl")
                        .HasColumnType("TEXT")
                        .HasColumnName("image_url");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("TEXT")
                        .HasColumnName("title");

                    b.Property<int>("UserId")
                        .HasColumnType("INTEGER")
                        .HasColumnName("user_id");

                    b.HasKey("PostId");

                    b.HasIndex("ActivityId");

                    b.HasIndex("UserId");

                    b.ToTable("blog_posts");
                });

            modelBuilder.Entity("SCRUM_Backend.Models.ScheduledActivity", b =>
                {
                    b.Property<int>("ScheduleId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER")
                        .HasColumnName("schedule_id");

                    b.Property<int>("ActivityId")
                        .HasColumnType("INTEGER")
                        .HasColumnName("activity_id");

                    b.Property<string>("Location")
                        .IsRequired()
                        .HasColumnType("TEXT")
                        .HasColumnName("location");

                    b.Property<int>("ScheduledBy")
                        .HasColumnType("INTEGER")
                        .HasColumnName("scheduled_by");

                    b.Property<DateTime>("ScheduledTime")
                        .HasColumnType("TEXT")
                        .HasColumnName("scheduled_time");

                    b.Property<int>("UserId")
                        .HasColumnType("INTEGER")
                        .HasColumnName("user_id");

                    b.HasKey("ScheduleId");

                    b.HasIndex("ActivityId");

                    b.HasIndex("UserId");

                    b.ToTable("scheduled_activities");
                });

            modelBuilder.Entity("SCRUM_Backend.Models.User", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER")
                        .HasColumnName("user_id");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("TEXT")
                        .HasColumnName("first_name");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("TEXT")
                        .HasColumnName("last_name");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("TEXT")
                        .HasColumnName("password");

                    b.Property<string>("Role")
                        .IsRequired()
                        .HasColumnType("TEXT")
                        .HasColumnName("role");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasColumnType("TEXT")
                        .HasColumnName("username");

                    b.HasKey("UserId");

                    b.ToTable("users");
                });

            modelBuilder.Entity("SCRUM_Backend.Models.Ward", b =>
                {
                    b.Property<int>("WardId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER")
                        .HasColumnName("ward_id");

                    b.Property<int>("LeaderId")
                        .HasColumnType("INTEGER")
                        .HasColumnName("leader_id");

                    b.Property<string>("WardName")
                        .IsRequired()
                        .HasColumnType("TEXT")
                        .HasColumnName("ward_name");

                    b.HasKey("WardId");

                    b.HasIndex("LeaderId");

                    b.ToTable("wards");
                });

            modelBuilder.Entity("BlogLike", b =>
                {
                    b.HasOne("SCRUM_Backend.Models.BlogPost", null)
                        .WithMany("Likes")
                        .HasForeignKey("BlogPostPostId");

                    b.HasOne("SCRUM_Backend.Models.User", null)
                        .WithMany("BlogLikes")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("SCRUM_Backend.Models.BlogPost", b =>
                {
                    b.HasOne("SCRUM_Backend.Models.Activity", "Activity")
                        .WithMany("BlogPosts")
                        .HasForeignKey("ActivityId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("SCRUM_Backend.Models.User", "User")
                        .WithMany("BlogPosts")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Activity");

                    b.Navigation("User");
                });

            modelBuilder.Entity("SCRUM_Backend.Models.ScheduledActivity", b =>
                {
                    b.HasOne("SCRUM_Backend.Models.Activity", "Activity")
                        .WithMany("ScheduledActivities")
                        .HasForeignKey("ActivityId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("SCRUM_Backend.Models.User", "User")
                        .WithMany("ScheduledActivities")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Activity");

                    b.Navigation("User");
                });

            modelBuilder.Entity("SCRUM_Backend.Models.Ward", b =>
                {
                    b.HasOne("SCRUM_Backend.Models.User", "Leader")
                        .WithMany()
                        .HasForeignKey("LeaderId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Leader");
                });

            modelBuilder.Entity("SCRUM_Backend.Models.Activity", b =>
                {
                    b.Navigation("BlogPosts");

                    b.Navigation("ScheduledActivities");
                });

            modelBuilder.Entity("SCRUM_Backend.Models.BlogPost", b =>
                {
                    b.Navigation("Likes");
                });

            modelBuilder.Entity("SCRUM_Backend.Models.User", b =>
                {
                    b.Navigation("BlogLikes");

                    b.Navigation("BlogPosts");

                    b.Navigation("ScheduledActivities");
                });
#pragma warning restore 612, 618
        }
    }
}
