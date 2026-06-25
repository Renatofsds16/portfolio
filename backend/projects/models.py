from django.db import models


class Technology(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    

class Project(models.Model):
    title = models.CharField(max_length=150)

    description = models.TextField()

    image = models.ImageField(
        upload_to="projects/"
    )

    github_url = models.URLField()

    live_url = models.URLField(
        blank=True,
        null=True
    )

    technologies = models.ManyToManyField("Technology")

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.title