using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace SSW.Right4Me.Db.Migrations
{
    public partial class UserProfileAccessibilityNeeds : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AccessibilityNeeds",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Logo = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AccessibilityNeeds", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "UserProfileAccessibilityNeeds",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AccessibilityNeedId = table.Column<int>(nullable: true),
                    UserProfileId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserProfileAccessibilityNeeds", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UserProfileAccessibilityNeeds_AccessibilityNeeds_AccessibilityNeedId",
                        column: x => x.AccessibilityNeedId,
                        principalTable: "AccessibilityNeeds",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_UserProfileAccessibilityNeeds_AspNetUsers_UserProfileId",
                        column: x => x.UserProfileId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_UserProfileAccessibilityNeeds_AccessibilityNeedId",
                table: "UserProfileAccessibilityNeeds",
                column: "AccessibilityNeedId");

            migrationBuilder.CreateIndex(
                name: "IX_UserProfileAccessibilityNeeds_UserProfileId",
                table: "UserProfileAccessibilityNeeds",
                column: "UserProfileId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "UserProfileAccessibilityNeeds");

            migrationBuilder.DropTable(
                name: "AccessibilityNeeds");
        }
    }
}
